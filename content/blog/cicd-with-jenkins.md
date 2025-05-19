---
title: "Managing Continuous Integration Pipelines with Jenkins"
date: 2019-06-12T01:10:46+05:30
category: "Automation"
external_link: "https://auth0.com/blog/continuous-integration-and-continuous-deployment-with-jenkins/"
external_site_name: "Auth0 Blog"
external_site_link: "https://auth0.com/blog"
page_slug: "/blog/cicd-with-jenkins"
---

# Setting Up a CI Pipeline with Jenkins, GitHub, and Blue Ocean

## Introduction

Jenkins is acclaimed as the "leading open-source automation server," a versatile tool for automating diverse aspects of a development workflow. It enables the streamlining of processes such as running test cases, deploying the latest builds, or even automating entire Continuous Integration (CI) pipelines. Jenkins can be configured to execute these tasks in various environments, including dedicated containers. Its distributed nature allows for scalable workloads and simultaneous task execution across different environments, such as running test cases for an Angular project in multiple browsers and versions concurrently. With an extensive library of plugins, Jenkins seamlessly integrates and communicates with external services like Git, Slack, and more.

In this tutorial, you will learn to set up a Jenkins instance. You will also explore how to leverage the modern Blue Ocean plugin interface and integrate with GitHub to automate tests. You can use [this GitHub repository](https://github.com/auth0-blog/jenkins-ci-cd) as a reference if needed.

> “Learn how to manage Continuous Integration pipelines with Jenkins.”
> Tweet This

## 1. Installing Jenkins

To begin, you'll need a server to host Jenkins, making it accessible globally to you and any services you integrate with it. At a minimum, this requires a static IP address or a valid DNS name pointing to the server. This domain (or IP) will be used by external services like GitHub to notify Jenkins of new events.

If you already have a server, you can skip to section 1.2.

### 1.1. Setting up a DigitalOcean Droplet

DigitalOcean is a cloud provider simplifying the setup of virtual servers, known as droplets. If you don't have a DigitalOcean account, you can use [this link](https://m.do.co/c/4541f2180905) to get $100 in credit over 60 days.

1.  Navigate to the droplets management console and click on "Create Droplet".
2.  **Choose an image:** Select "Ubuntu 18.04" (or a current LTS version).
3.  **Choose a plan:** Start with a basic plan (e.g., $5/month).
4.  **Choose a datacenter region:** Select one closest to you (e.g., Bangalore).
5.  **Authentication:** Add SSH keys if you have them, or you can use password authentication (explained later).
6.  **Hostname:** Assign a descriptive hostname (e.g., `jenkins-test`).
7.  Verify details and click "Create".

Once the droplet is created, you'll receive its IP address, username, and password via email (if you didn't use SSH keys). Log into the server using a terminal:

```bash
ssh <username>@<public_ip_address>
```
**Note:** Replace `<username>` and `<public_ip_address>` with your droplet's credentials.

You might be prompted to add the IP address to your list of known hosts; accept it. Enter your password when prompted. You may be asked to reset the password.

You now have a virtual server ready for Jenkins installation.

### 1.2. Installing Jenkins

After accessing your server, update its packages:

```bash
sudo apt update
sudo apt upgrade
```

Install the Java 8 runtime environment, which is required by Jenkins:

```bash
# Install Java 8
sudo apt install openjdk-8-jdk

# Verify installation
java -version
```
If the output is similar to `openjdk version "1.8.0_212"`, proceed to install Jenkins.

Add the Jenkins repository key to the system:
```bash
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
```

Add the Debian package repository to your system's sources:
```bash
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
```

Update `apt` to use the new source:
```bash
sudo apt-get update
```

Finally, install Jenkins:
```bash
sudo apt-get install jenkins
```

Congratulations! Jenkins is installed. Access your Jenkins setup at `http://<public_ip_address>:8080`. Jenkins listens on port 8080 by default.

## 2. Setting Up Root User

When you first access your Jenkins setup (`http://<public_ip_address>:8080`), you'll be asked to "Unlock Jenkins" with a password. This password ensures that the person setting up Jenkins has server access.

Fetch this password from your server:
```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
Copy the output and paste it into the Jenkins setup page.

On the next screen, select "Install suggested plugins." You'll see the installation progress.

After plugin installation, create your first admin user by filling in the required details.

*Image: Filling in the details about the first Jenkins user.*

Next, provide the domain name Jenkins will use (e.g., `jenkins.example.com`). For this tutorial, you can use your server's public IP address.

Click "Save and Finish" to complete the setup. You'll be redirected to your Jenkins dashboard.

You have successfully installed Jenkins and are ready to connect it with GitHub.

## 3. Installing Jenkins Blue Ocean

Jenkins Blue Ocean offers a modern interface for interacting with Jenkins.
1.  From your Jenkins dashboard, select "Manage Jenkins" from the left navigation bar.
2.  Select "Manage Plugins."
3.  Click on the "Available" tab.
4.  Search for "Blue Ocean."
5.  Check the box next to it and click "Install without restart."

*Image: Installing Jenkins Blue Ocean plugin.*

Once installation completes, access the new interface at `http://<public_ip_address>:8080/blue`.

## 4. Setting Up a Pipeline and Connecting to GitHub

When you open the Blue Ocean URL for the first time, you'll be prompted to create a new pipeline.

*Image: Create your first Blue Ocean pipeline.*

A **Pipeline** is a defined set of procedures with tasks like running test cases, verifying code, creating deployment packages, and deploying to servers. Triggers initiate these tasks, and each run is called a **Job**.

The goal is to use GitHub actions (like commits) as triggers.
1.  Click "Create a new Pipeline."
2.  Select "GitHub."
3.  You'll need to create a GitHub access token. Click the "Create access token here" link.
    *   **Note:** "Jenkins Integration" (or similar).
    *   **Select scopes:** Leave with default values.
4.  Click "Generate token." Copy this token (GitHub shows it only once).
5.  Paste the token into the "Your GitHub access token" field in Blue Ocean and click "Connect."

Jenkins will now ask you to select a GitHub organization and repository.
1.  Open GitHub in a new tab and create a new repository named `jenkins-test`.
2.  Back in Jenkins:
    *   Select the organization where the repo resides.
    *   Select the `jenkins-test` repository.
3.  Click "Create Pipeline."

*Image: Using Jenkins to create a new pipeline on a GitHub repository.*

Your pipeline will be ready in a few seconds, and you'll be redirected to the pipeline editor.

## 5. Adding Stages to the Pipeline

A **Stage** is a logical block in a pipeline housing various **Steps** (individual actions).

For this tutorial, the pipeline will check for the presence of two files: `file-1.txt` and `file-2.txt`.

First, define the **Agent** (the environment where the pipeline runs). Jenkins supports distributed architectures with master and agent nodes, or Docker containers. For this tutorial, Jenkins will run the pipeline on the host server itself.
*   In the pipeline editor, select "any" from the "Agent" dropdown on the right.
*   Leave environment variables blank for now.

To add a stage:
1.  Click the plus (+) button next to "Start."
2.  Name the stage (e.g., "Check file 1").
3.  Click "Add Step."
4.  Choose step type: "Shell Script."
5.  Enter the command: `cat file-1.txt` (this checks if the file exists; if not, the step fails).

Similarly, add a second stage named "Check file 2" with a "Shell Script" step using the command `cat file-2.txt`.

*Image: Adding multiple stages to a Jenkins job.*

Save this pipeline to your repository. Pipelines are configurations stored in a `Jenkinsfile` at the root of your repository. You can also write this file directly ([learn more here](https://jenkins.io/doc/book/pipeline/jenkinsfile/)).
1.  Click "Save" on the top right.
2.  Add a commit message (e.g., "configuring Jenkins").
3.  Select the `master` branch.
4.  Click "Save and Run." This commits the `Jenkinsfile` to your branch and triggers the build.

You've defined pipeline stages and triggered your first build.

## 6. Setting Up GitHub Webhook

To automate builds upon new commits:
1.  Go to your GitHub repository (`jenkins-test`).
2.  Click the "Settings" tab.
3.  In the left navigation bar, select "Webhooks."
4.  Click "Add Webhook."
5.  **Payload URL:** `http://<public_ip_address>:8080/github-webhook/` (replace `<public_ip_address>`).
6.  Leave other settings as default and click "Add Webhook."

*Image: Creating a GitHub webhook to notify Jenkins about new commits.*

GitHub will now notify Jenkins of any new commits.

## 7. Triggering the First Automated Build

Test the integration by making a commit. You can either:
*   Clone your repository locally, add files, commit, and push.
*   Use GitHub's website to create the files.

Add two files to the project root: `file-1.txt` and `file-2.txt` (content doesn't matter for this test).

If working locally, commit and push the new files. GitHub will notify Jenkins, triggering an automatic build (which should succeed if both files are present).

If using GitHub's website, adding the first file will trigger a build (which will likely fail if the second file check is active). Adding the second file will trigger another build, which should then succeed.

*Image: Jenkins showing the list of builds that were automatically triggered after GitHub's webhooks notifications.*

New commits to this repository will now automatically trigger builds, and results will be updated on GitHub.

## 8. Recording Test Results and Artifacts

Each Jenkins build typically starts with a shallow clone of the branch in a new, isolated folder. After the build, Jenkins performs a cleanup, deleting this folder. To preserve test results or build outputs, use **build artifacts**.

**Note:** Build artifacts are stored in `/var/lib/jenkins/workspace/` on your Jenkins server if you're curious.

This section transforms your repository into a simple npm project to demonstrate recording test results. (npm/Node.js knowledge isn't strictly required to follow, but you need them installed locally for these steps.)

**Note:** Jenkins understands JUnit XML format for test results, a standard supported by most test runners. This tutorial uses MochaJS.

1.  Ensure npm and Node.js are installed locally.
2.  Clone your `jenkins-test` repository.
3.  Initialize an npm project:
    ```bash
    # from the repository project root
    npm init -y
    ```
4.  Install dependencies:
    ```bash
    # install the test case runner
    npm install --save-dev mocha

    # install the JUnit XML reporter
    npm install --save-dev mocha-jenkins-reporter
    ```
5.  Create `test.js` with the following content:
    ```javascript
    const assert = require('assert');

    describe('Addition', function() {
      it('2 + 2 should be 4', function() {
        assert.equal((2 + 2), 4);
      });

      it('1 + 5 should be 6', function() {
        assert.equal((1 + 5), 6);
      });
    });

    describe('Type Comparison', function() {
      it('\'5\' == 5 should be true', function() {
        assert.equal(('5' == 5), true);
      });

      it('\'5\' === 5 should be false', function() {
        assert.equal(('5' === 5), false);
      });
    });
    ```
6.  Run tests locally:
    ```bash
    npx mocha
    ```
7.  Generate reports in JUnit XML format:
    ```bash
    # define where you want the test results
    export JUNIT_REPORT_PATH=./test-results.xml

    # run mocha and tell it to use the JUnit reporter
    npx mocha --reporter mocha-jenkins-reporter
    ```
    This saves results to `test-results.xml`.

8.  Update your GitHub repository:
    ```bash
    # make git ignore the node_modules directory
    echo "node_modules/" > .gitignore

    # stage your new code
    git add .

    # commit it to git
    git commit -m "Added Test Cases"

    # push it to GitHub
    git push origin master
    ```

Now, configure Jenkins to run these tests and find the XML report.
1.  Go to the Blue Ocean pipeline editor (e.g., `http://<public_ip_address>:8080/blue/organizations/jenkins/pipeline-editor/jenkins-ci-cd/master/`).
2.  Add a new stage after "Check file 2" called "Install dependencies".
    *   Add a "Shell Script" step: `npm install -d`
3.  Add another stage after "Install dependencies" called "Run test cases".
    *   Add a "Shell Script" step:
      ```bash
      # define where you want the test results
      export JUNIT_REPORT_PATH=./test-results.xml

      # run mocha and tell it to use the JUnit reporter
      npx mocha --reporter mocha-jenkins-reporter
      ```
4.  Click "Save" on the top right.

Install npm and Node.js on your Jenkins server (as global dependencies):
```bash
ssh <username>@<public_ip_address>
# Then, on the server:
sudo apt install nodejs npm
```

To capture JUnit-formatted test results, you need to update the `Jenkinsfile` directly, as the visual editor might not support the `post` stage for this.
Open `Jenkinsfile` (at the project root) and update it:
```groovy
pipeline {
  agent any
  stages {
    // ... all existing stages remain untouched ...
    stage('Install dependencies') {
        steps {
            sh 'npm install -d'
        }
    }
    stage('Run test cases') {
        steps {
            sh '''
            export JUNIT_REPORT_PATH=./test-results.xml
            npx mocha --reporter mocha-jenkins-reporter
            '''
        }
    }
  }
  post {
    always {
        junit 'test-results.xml'
    }
  }
}
```
Commit and push this change. You should now find test results on the "Tests" tab of your Jenkins pipeline.

*Image: Checking tests results on a Jenkins pipeline.*

You've learned to record test results and track their status across builds.

## 9. Exploring Plugins

Plugins are the backbone of Jenkins' power and flexibility. Explore available plugins [here](https://plugins.jenkins.io/).
Examples:
*   **Slack Notification:** Notify your Slack channel about build statuses.
*   **Kubernetes Plugin:** Integrate with Kubernetes.
*   Cloud container service plugins like **Amazon Elastic Container Service** and **Azure Container Service**.

> “I just built a Continuous Integration pipeline with Jenkins. So cool!”
> Tweet This

## Aside: Syncing Authentication in CI using the Auth0 Deploy CLI Tool

Managing authentication configuration across different environments (e.g., testing, production) can be tricky. Auth0 can help manage this part of your Jenkins pipeline using the [Auth0 Deploy CLI tool](https://auth0.com/docs/deploy/deploy-cli-tool).

The Deploy CLI tool allows you to:
*   Import and export Auth0 tenant configuration objects (tenant settings, rules, connections).
*   Export data to a predefined directory structure or a YAML configuration file.
*   Call the tool programmatically.
*   Replace environment variables.

To try this:
1.  [Sign up for a free Auth0 account](https://auth0.com/signup).
2.  Check the documentation on [how to install the CLI tool](https://auth0.com/docs/deploy/deploy-cli-tool/install-configure-the-deploy-cli) and [incorporate it into your build environment](https://auth0.com/docs/deploy/deploy-cli-tool/incorporate-the-deploy-cli-into-the-build-environment).

**Note:** This tool can be destructive to your Auth0 tenant. Please read the documentation and test on a development tenant before using it in production.

## Conclusion

Congratulations! You now have a Jenkins setup capable of automatically testing your codebase with each push. You can track build history, identify when test cases fail, and perform integration testing after pull request merges.

What are your thoughts? Will you use Jenkins in production? Let us know in the comment box below.
