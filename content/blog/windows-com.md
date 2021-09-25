---
title: "Automating windows with COM object"
date: 2018-12-01T22:24:41+05:30
basecolor: "#fff"
author: "Mayank Raj"
enablecomments: false
category: "Tutorial"
bgimage: "/images/blog_covers/windows_com.jpeg"
page_slug: "/blog/automation-with-windows-com"
---

A few weeks ago I got a project wherein I had to get various statistical data about a document. One of the important parameters was to get a precise count of grammatical errors in the document. I tried to go the open source way and tested out [LanguageTool](https://www.languagetool.org/), [PorseLink](http://proselint.com/) among others. None of these were up to the mark of the good old MS-Word.
So I had to now work on a way to problematically access Word, load a document in it and get the statistics.

Python being versatile and great at memory management, we would be using it to control COM object and do what we need to do.

***

This is the Part 1 of the two series post.

**Part 1** : Introduction to `COMobject`, initialization, examples etc

**Part 2** : Setting up a server environment. Making use of threads and opening using thread for each process. This is how to communicate with the `COMobject` in a multi-thread environment as it cannot be passed to a thread directly.

***
# Before we dig deep, what is COMobject ?

> The Microsoft Component Object Model (COM) is a platform-independent, distributed, object-oriented system for creating binary software components that can interact. COM is the foundation technology for Microsoft's OLE (compound documents), ActiveX (Internet-enabled components), as well as others. [read more...](https://msdn.microsoft.com/en-us/library/windows/desktop/ms694363(v=vs.85).aspx)

In a nutshell it can be used to control various aspects of Windows. We would be focusing on using the `COMobject` to control MS-Office applications like Word and Excel. Although it is not limited to just MS-Office applications, it can be used to communicate with other softwares like IE (if you're still into it...)

You can do things like :
- Create triggers to perform various tasks
    + Add new rows to an excel sheet in real time with the current scores of a game. This excel sheet can then have some complex algorithms to predict which team would win by performing calculations on all the rows. Although it can be done with implementation in even NodeJS but we don't want to take the pain to port the functions/macros from Excel to JS
- Log the current changes made by the user XYZ in the database

The possibilities are limitless. I guess you already have a use case in mind and landing to this page to know the process, if not it's always good to know if there is possibility to get a certain functionality done.

# Python and COM

We will need the following tools to communicate with MS-Word :

- MS Office or Specific applications already installed
- [PyWin32 library](https://pypi.python.org/pypi/pywin32)

`PyWin32` is a great library that gives us the same set of methods/properties that are exposed by COM which are natively in Visual Basic for Applications (VBA).

> NOTE: I'm using Python3 in the code samples in this guide.

## Let's start

To get hold of a COM object

```python
import win32com.client

# for MS-Word
word = win32.gencache.EnsureDispatch('Word.Application')
# OR
word = win32com.client.DispatchEx('Word.Application')

# for MS-Excel
excel = win32.gencache.EnsureDispatch('Excel.Application')
# OR
excel = win32com.client.DispatchEx('Excel.Application')
```

There are some key differences to be noted here

`EnsureDispatch` : In dead simple terms, it makes sure that a object which references the specified application is returned. If the application is already open, it will return the same instance, if not it will start a instance and return it.
It is useful in cases where you would want to make use of single application that holds certain meta-data, over the life of the process. 

`DispatchEx` : For each call, you would get a new object returned. This would mean that if you call it 7 times, you would see 7 instances of MS-Word in task manager.
It makes sense to get independent instances when you would want to handle each process independently and close the application when one process completes. 

> Understand that if you run a web-server that takes in data, puts it in an Excel, runs a macro and return a result. You would want to have a dedicated instance of Excel for each process so that you can close it as soon as the response is ready. If you used `EnsureDispatch` or `Dispatch`, that would mean that at the end of each process, you would have to check if any other process is in progress, if not shut down the application.

> It's requires a bit extra memory but helps to keep memory leak in check as using same application instance to load up multiple files that do not require each others data, means that with each load, some meta-data is loaded which is not cleared when closing the process and it builds up over time. _We will cover this aspect in detail in the Part-2 of the post._

Coming back to the point, let's go ahead. 

Now that we have the `COMobject` we can use it a open a Word Document.

```python
doc = word.Documents.Open( os.path.join( os.getcwd(), 'path/to/files/', filename), ReadOnly=True)
```

> NOTE : As you might have had guessed, you can use the same `word` object to open multiple `doc` objects. This is what I was referring to using same application to open multiple documents in the last paragraph

## References
At this point, we can refer to Microsoft's documentation to get gist of various properties & functions available.

- [**Word 2007 Developers Reference**](https://msdn.microsoft.com/en-us/library/bb244391(v=office.12).aspx)
- [**Word Object Model reference**](https://msdn.microsoft.com/en-us/library/bb244515(v=office.12).aspx)
- [**Application Object**](https://msdn.microsoft.com/en-us/library/bb244569(v=office.12).aspx) : List of methods and properties available


## Let's have look at some usage examples:

1. Make the application window invisible :

    ```python
    word.Visible = False
    ```


2. To add a new Document

    ```python
    doc = word.Documents.Add()
    ```

3. To get all the grammatical or spelling errors

    ```python
    grammaticalErrors = doc.GrammaticalErrors
    spellingErrors = doc.doc.SpellingErrors

    #or to simple get the count
    grammaticalErrorsCount = doc.GrammaticalErrors.Count
    spellingErrorsCount = doc.SpellingErrors.Count
    ```

4. If you have a look at the [**Word BuiltInProperty**](https://msdn.microsoft.com/en-us/library/bb237490(v=office.12).aspx), you'll see you can do the following

    ```python
    wordCount = int(doc.BuiltInDocumentProperties(15))
    characterCount = int(doc.BuiltInDocumentProperties(16))
    paragraphCount = int(doc.BuiltInDocumentProperties(24))
    ```

5. or do something much more complex as

    ```python
    characterPerWord = doc.ReadabilityStatistics("Characters per Word").Value
    ```

6. or something as simple as

    ```python
    shapeCount = doc.Shapes.Count
    tableCount = doc.Tables.Count
    sentenceCount = doc.Sentences.Count
    tableOfContentCount = doc.TablesOfContents.Count

    #loop through each paragraphs
    for paras in doc.Paragraphs:
        # paras will now be each individual paragraph

    ```



# Conclusion
As you can see the possibilities are endless. MS-Office tools are pretty powerful in what they do. We did not even dig into the excel territory. Majority of the questions on stackoverflow are based on excel as automating tasks there makes can be of great use.

In the next post we will focus on how to wrap all this up into dedicated thread for each process and word with COMobject in threads.
