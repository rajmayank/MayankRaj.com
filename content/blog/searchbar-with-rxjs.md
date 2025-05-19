---
title: "How To Build a Search Bar with RxJS"
date: 2019-04-18T01:10:46+05:30
category: "JavaScript"
external_link: "https://www.digitalocean.com/community/tutorials/how-to-build-a-search-bar-with-rxjs"
external_site_name: "Digital Ocean Community"
external_site_link: "https://www.digitalocean.com/community/tutorials"
page_slug: "/blog/searchbar-with-rxjs"
---

# Building a Feature-Rich Search Bar with RxJS

## Introduction

Reactive Programming is a paradigm concerned with asynchronous data streams, in which the programming model considers everything to be a stream of data spread over time. This includes keystrokes, HTTP requests, files to be printed, and even elements of an array, which can be considered to be timed over very small intervals. This makes it a perfect fit for JavaScript as asynchronous data is common in the language.

RxJS is a popular library for reactive programming in JavaScript. ReactiveX, the umbrella under which RxJS lies, has its extensions in many other languages like Java, Python, C++, Swift, and Dart. RxJS is also widely used by libraries like Angular and React.

RxJS’s implementation is based on chained functions that are aware and capable of handling data over a range of time. This means that one could implement virtually every aspect of RxJS with nothing more than functions that receive a list of arguments and callbacks, and then execute them when signaled to do so. The community around RxJS has done this heavy lifting, and the result is an API that you can directly use in any application to write clean and maintainable code.

In this tutorial, you will use RxJS to build a feature-rich search bar that returns real-time results to users. You will also use HTML and CSS to format the search bar.

*(Image from the original tutorial: Demonstration of Search Bar)*

Something as common and seemingly simple as a search bar needs to have various checks in place. This tutorial will show you how RxJS can turn a fairly complex set of requirements into code that is manageable and easy to understand.

## Prerequisites

Before you begin this tutorial you’ll need the following:

*   A text editor that supports JavaScript syntax highlighting, such as Atom, Visual Studio Code, or Sublime Text. These editors are available on Windows, macOS, and Linux.
*   Familiarity with using HTML and JavaScript together. Learn more in [How To Add JavaScript to HTML](https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html).
*   Familiarity with the JSON data format, which you can learn more about in [How to Work with JSON in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript).

The full code for the tutorial is available on [Github](https://github.com/do-community/rxjs-search-bar).

## Step 1 — Creating and Styling Your Search Bar

In this step, you will create and style the search bar with HTML and CSS. The code will use a few common elements from Bootstrap to speed up the process of structuring and styling the page so you can focus on adding custom elements. Bootstrap is a CSS framework that contains templates for common elements like typography, forms, buttons, navigation, grids, and other interface components. Your application will also use Animate.css to add animation to the search bar.

First, create a file named `search-bar.html`.

Next, create the basic structure for your application. Add the following HTML to the new file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>RxJS Tutorial</title>
    <!-- Load CSS -->

    <!-- Load Rubik font -->

    <!-- Add Custom inline CSS -->

  </head>
  <body>
      <!-- Content -->

      <!-- Page Header and Search Bar -->

      <!-- Results -->

      <!-- Load External RxJS -->

      <!-- Add custom inline JavaScript -->
      <script>

      </script>
  </body>
</html>
```

Load the CSS for Bootstrap and Animate.css. Add the following code under the `<!-- Load CSS -->` comment:

```html
<!-- Load CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
```

This tutorial will use a custom font called Rubik from the Google Fonts library. Load the font by adding the following code under the `<!-- Load Rubik font -->` comment:

```html
<!-- Load Rubik font -->
<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
```

Next, add the custom CSS to the page under the `<!-- Add Custom inline CSS -->` comment. This will style the headings, search bar, and results.

```html
<!-- Add Custom inline CSS -->
<style>
  body {
    background-color: #f5f5f5;
    font-family: "Rubik", sans-serif;
  }
  
  .search-container {
    margin-top: 50px;
  }
  .search-container .search-heading {
    display: block;
    margin-bottom: 50px;
  }
  .search-container input,
  .search-container input:focus {
    padding: 16px 16px 16px;
    border: none;
    background: rgb(255, 255, 255);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1) !important;
  }

  .results-container {
    margin-top: 50px;
  }
  .results-container .list-group .list-group-item {
    background-color: transparent;
    border-top: none !important;
    border-bottom: 1px solid rgba(236, 229, 229, 0.64);
  }

  .float-bottom-right {
    position: fixed;
    bottom: 20px;
    left: 20px;
    font-size: 20px;
    font-weight: 700;
    z-index: 1000;
  }
  .float-bottom-right .info-container .card {
    display: none;
  }
  .float-bottom-right .info-container:hover .card,
  .float-bottom-right .info-container .card:hover {
    display: block;
  }
</style>
```

Now that the styles are in place, add the HTML for the header and input bar under the `<!-- Page Header and Search Bar -->` comment:

```html
<!-- Content -->
<!-- Page Header and Search Bar -->
<div class="container search-container">
    <div class="row justify-content-center">
        <div class="col-md-auto">
        <div class="search-heading">
            <h2>Search for Materials Published by Author Name</h2>
            <p class="text-right">powered by <a href="https://www.crossref.org/">Crossref</a></p>
        </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm-8">
        <div class="input-group input-group-md">
            <input id="search-input" type="text" class="form-control" placeholder="eg. Richard" aria-label="eg. Richard" autofocus>
        </div>
        </div>
    </div>
</div>
```
This uses Bootstrap's grid system. The search bar has an `id` of `search-input`, which will be used to bind a listener.

Next, create a location to display search results. Under the `<!-- Results -->` comment, add the following:

```html
<!-- Results -->
<div class="container results-container">
    <div class="row justify-content-center">
        <div class="col-sm-8">
        <ul id="response-list" class="list-group list-group-flush"></ul>
        </div>
    </div>
</div>
```
The `ul` element with the `id` `response-list` will hold the search results.

At this point, the `search-bar.html` file has its basic structure and styling. In the next step, you will write the JavaScript function to handle search terms and results.

## Step 2 — Writing the JavaScript

With the HTML structure formatted, you can write the JavaScript code. This code will serve as the foundation for the RxJS implementation.

Load the RxJS library by adding the following under the `<!-- Load RxJS -->` comment in `search-bar.html`:

```html
<!-- Load RxJS -->
<script src="https://unpkg.com/@reactivex/rxjs@5.0.3/dist/global/Rx.js"></script>
```

Inside the `<script>` tag (under the `<!-- Add custom inline JavaScript -->` comment), store a reference to the HTML element where results will be displayed:

```javascript
// Add custom inline JavaScript
const output = document.getElementById("response-list");
```

Next, add a function to convert the JSON response from the API into HTML elements. This function will clear previous results and set a delay for search result animation. Add the `showResults` function:

```javascript
const output = document.getElementById("response-list");

function showResults(resp) {
    var items = resp['message']['items'];
    output.innerHTML = "";
    let animationDelay = 0; // Corrected: Use let or var for declaration
    if (items.length == 0) {
        output.innerHTML = "<li>Could not find any :(</li>"; // Corrected: Wrap message in <li> for consistency
    } else {
        items.forEach(item => {
        let resultItem = `
        <div class="list-group-item animated fadeInUp" style="animation-delay: ${animationDelay}s;">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${(item['title'] && item['title']) || "&lt;Title not available&gt;"}</h5>
            </div>
            <p class="mb-1">${(item['container-title'] && item['container-title']) || ""}</p>
            <small class="text-muted"><a href="${item['URL']}" target="_blank">${item['URL']}</a></small>
            <div> 
            <p class="badge badge-primary badge-pill">${item['publisher'] || ''}</p>
            <p class="badge badge-primary badge-pill">${item['type'] || ''}</p> 
            </div>
        </div>
        `;
        output.insertAdjacentHTML("beforeend", resultItem);
        animationDelay += 0.1;                        
        });
    }
}
```
The `if` block checks for search results. If results are found, the `forEach` loop displays them with an animation.

You've now laid the groundwork for RxJS by creating a function that accepts results and renders them on the page.

## Step 3 — Setting Up a Listener

RxJS deals with data streams. In this project, the stream is the series of characters a user types into the search bar. You will add a listener to the input element.

Recall the `search-input` identifier used for the input field:
```html
<input id="search-input" type="text" class="form-control" placeholder="eg. Richard" aria-label="eg. Richard" autofocus>
```

Create a variable to hold a reference to the `search-input` element. This will be the Observable for input events. Add this line within your `<script>` tags, after the `showResults` function:

```javascript
// ... (output variable and showResults function)

let searchInput = document.getElementById("search-input");
```

Use the `fromEvent` operator from RxJS to listen for `input` events on this DOM element. Add the following line:

```javascript
// ... (output variable and showResults function)

let searchInput = document.getElementById("search-input");
Rx.Observable.fromEvent(searchInput, 'input')
// ... (more operators will be chained here)
```
The listener is now set up to notify your code of updates to the input element.

## Step 4 — Adding Operators

Operators are pure functions that perform operations on data streams. You'll use operators for tasks like buffering input, making HTTP requests, and filtering results.

1.  **Pluck Target Value:**
    The DOM `input` event contains various details. We are interested in the value typed into the target element. Use the `pluck` operator:

    ```javascript
    let searchInput = document.getElementById("search-input");
    Rx.Observable.fromEvent(searchInput, 'input')
        .pluck('target', 'value')
    // ...
    ```

2.  **Filter by Search Term Length:**
    Set a minimum search term length (e.g., three characters) because shorter terms might not yield relevant results or the user might still be typing. Use the `filter` operator:

    ```javascript
    // ...
    Rx.Observable.fromEvent(searchInput, 'input')
        .pluck('target', 'value')
        .filter(searchTerm => searchTerm.length > 2)
    // ...
    ```

3.  **Debounce Input:**
    To ease the load on the API server, ensure requests are sent only at intervals (e.g., 500ms). Use the `debounceTime` operator:

    ```javascript
    // ...
    Rx.Observable.fromEvent(searchInput, 'input')
        .pluck('target', 'value')
        .filter(searchTerm => searchTerm.length > 2)
        .debounceTime(500)
    // ...
    ```

4.  **Distinct Until Changed (Input):**
    Ignore the search term if it hasn't changed since the last API call. This further optimizes API calls. Use the `distinctUntilChanged` operator:

    ```javascript
    // ...
    Rx.Observable.fromEvent(searchInput, 'input')
        .pluck('target', 'value')
        .filter(searchTerm => searchTerm.length > 2)
        .debounceTime(500)
        .distinctUntilChanged()
    // ...
    ```

5.  **SwitchMap for API Calls:**
    Query the API with the search term using RxJS's AJAX implementation. `switchMap` is used to chain AJAX calls. It cancels previous pending requests if a new search term comes in. The `map` operator within `switchMap` structures the API response. The example uses the Crossref API.

    ```javascript
    // ...
    Rx.Observable.fromEvent(searchInput, 'input')
        .pluck('target', 'value')
        .filter(searchTerm => searchTerm.length > 2)
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(searchKey => Rx.Observable.ajax(`https://api.crossref.org/works?rows=50&query.author=${searchKey}`)
            .map(resp => ({
                "status" : resp["status"] == 200,
                "details" : resp["status"] == 200 ? resp["response"] : [],
                "result_hash": Date.now() // A simple way to check if response content changed
            }))
        )
    // ...
    ```
    The response is broken into:
    *   `status`: HTTP status (true if 200).
    *   `details`: The actual response data.
    *   `result_hash`: A timestamp to help detect if results have changed.

6.  **Filter Unsuccessful API Responses:**
    Use the `filter` operator to only accept successful (status 200) API responses:

    ```javascript
    // ... (previous operators)
        .switchMap(searchKey => Rx.Observable.ajax(`https://api.crossref.org/works?rows=50&query.author=${searchKey}`)
            .map(resp => ({
                "status" : resp["status"] == 200,
                "details" : resp["status"] == 200 ? resp["response"] : [],
                "result_hash": Date.now()
            }))
        )
        .filter(resp => resp.status !== false) // or resp.status === true
    // ...
    ```

7.  **Distinct Until Changed (Response):**
    Only update the DOM if the API response has actually changed. This reduces resource-heavy DOM updates. Use `distinctUntilChanged` with a custom comparator function checking the `result_hash`.

    ```javascript
    // ... (previous operators)
        .filter(resp => resp.status !== false)
        .distinctUntilChanged((a, b) => a.result_hash === b.result_hash)
    // ...
    ```
    This compares the `result_hash` of the current and previous emissions. If they are the same, the data is filtered out.

You've now created a pipeline that processes user input, performs checks, makes an API call, and formats the response, optimizing for resource usage.

## Step 5 — Activating Everything with a Subscription

The `subscribe` operator is the final link that connects an Observer to the Observable, enabling the flow of data. It typically implements three methods:

*   `onNext`: Specifies what to do when an event is received.
*   `onError`: Handles errors. No further `onNext` or `onCompleted` calls are made after an error.
*   `onCompleted`: Called when `onNext` has been called for the final time (no more data).

This enables lazy execution: the Observable pipeline is defined but only starts emitting data upon subscription.

Subscribe to the Observable and route the data to the `showResults` function:

```javascript
// Full RxJS chain:
let searchInput = document.getElementById("search-input");

Rx.Observable.fromEvent(searchInput, 'input')
    .pluck('target', 'value')
    .filter(searchTerm => searchTerm.length > 2)
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(searchKey => Rx.Observable.ajax(`https://api.crossref.org/works?rows=50&query.author=${searchKey}`)
        .map(resp => ({
            "status" : resp["status"] == 200,
            "details" : resp["status"] == 200 ? resp["response"] : [],
            "result_hash": Date.now()
        }))
    )
    .filter(resp => resp.status !== false)
    .distinctUntilChanged((a, b) => a.result_hash === b.result_hash)
    .subscribe(resp => showResults(resp.details)); // Pass only the details to showResults
```

Save the `search-bar.html` file. Open it in your web browser to test the search bar.

*(Image from the original tutorial: The completed search bar)*
*(GIF from the original tutorial: Content being entered into the search bar, showing behavior with few characters)*

You have now subscribed to the Observable, activating your search bar.

## Conclusion

In this tutorial, you created a feature-rich search bar using RxJS, CSS, and HTML that provides real-time results. The search bar requires a minimum of three characters, updates automatically, and is optimized for both client and API server load.

Complex requirements were addressed with concise RxJS code, leading to a solution that is reader-friendly and maintainable.

For further reading, refer to the [official RxJS API documentation](http://reactivex.io/rxjs/identifiers.html).
