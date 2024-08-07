---
title: "Serverless Architecture 101: Key areas to look into from Day 0"
date: 2022-12-06T00:00:00+05:30
basecolor: "#EF6262"
author: "Mayank Raj"
enablecomments: false
category: "Serverless Architecture"
bgimage: "/images/blog_covers/serverless-arch.png"
page_slug: "/blog/serverless-architecture-101"
---

You might have heard about Serverless recently. It has become increasingly popular, with more and more businesses adopting it as a way to build and deploy applications. Moreover, developers are finding it easy to build applications with it. Serverless computing allows developers to focus on writing code, without worrying about the underlying infrastructure.

Over the years, I've built many applications with serverless components embedded into them. Today I prefer to use my serverless templates for even my hobby projects let alone API endpoints that process millions of requests. There are a few key areas that I always find myself coming back to. In this post, I've collected 10 such areas that you should pay attention to when building serverless applications, especially using AWS services.

<br/>

---

Let's start with the three basics - API, Compute, and Storage.

## 1. API Endpoints

API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. It acts as a “front door” for your serverless application, allowing you to define RESTful APIs and route requests to backend services. However, if GraphQL is more of your thing, look no further than AWS AppSync.

For Example: If you want to build a serverless application that requires an API, you can use AWS API Gateway to define your RESTful APIs and route requests to your Lambda functions.

## 2. Compute

No brownie points for guessing it. Compute is the foundation of serverless architecture. AWS provides two main computing services: AWS Lambda and AWS Fargate. AWS Lambda is a computing service that lets you run code without provisioning or managing servers. Fargate is a serverless compute engine for containers that allows you to run containers without managing servers or clusters.
For Example: If you want to build a serverless application that requires a lot of computing power, you can use AWS Lambda to run your code. If you have your containers with you fargate may be better suited for you.

## 3. Storage

Serverless applications require storage for application data, logs, and other assets. AWS provides several storage services, including Amazon S3, Amazon DynamoDB, and Amazon Aurora serverless.
For Example: If you want to build a serverless application that requires a database, you can use Amazon DynamoDB to store your data.

<br/>

---

Now with basics out of the way, you have your POC in place. We now get into the interesting aspects of making this application ready for the wide and interesting audience of the public internet.

## 5. Breaking down the core logic:

Break down your application into smaller, focused functions to take full advantage of serverless scalability. Avoid creating monolithic functions that handle multiple tasks.
For example, in an e-commerce application, a lambda function for processing orders and another for sending email notifications would be ideal. You can club them with SQS and make the two logical flows async.

## 6. Events and more Events:

Always think of breaking into smaller modules and syncing them together with events. Make use of the event-driven architecture to trigger serverless functions. Utilize AWS services such as Amazon S3, Amazon DynamoDB, or Amazon Simple Notification Service (SNS) to trigger functions based on specific events.
For instance, when a new image is uploaded to an S3 bucket, you can automatically resize and optimize it using AWS Lambda.

## 7. Data and State Durability:

Serverless functions are inherently stateless, which means they do not maintain a session state. Use managed services like Amazon DynamoDB, Amazon Aurora Serverless, or Amazon Simple Queue Service (SQS) to persist and manage application state across invocations.

## 8. Balance Scalability with Concurrency :

Design your serverless application to handle concurrent invocations effectively. Configure the maximum concurrency limits for your functions to avoid resource exhaustion. AWS provides services like AWS Auto Scaling and Amazon API Gateway to automatically scale your serverless application based on demand.

## 9. Design for Cold Starts:

Serverless functions may experience latency due to cold starts when invoked infrequently. Employ strategies such as function warmers, provisioned concurrency, or keeping functions warm with periodic invocations. AWS Lambda provides provisioned concurrency to keep functions ready for instant response.

## 10. Distributed Tracing and Monitoring:

Ensure visibility into your serverless application by implementing distributed tracing and monitoring. AWS X-Ray allows you to trace requests as they flow across different serverless functions, helping you identify performance bottlenecks and optimize your application.

## 11. Security and Access Control:

Implement proper security measures to protect your serverless applications. Leverage AWS Identity and Access Management (IAM) for fine-grained access control. Apply security best practices, such as using secure API gateways, encrypting data at rest and in transit, and following least privilege principles.

## 12. Error Handling and Retry Mechanisms:

Design your serverless application to handle errors gracefully. Utilize features like AWS Step Functions for building resilient workflows, or implement retries with exponential backoff to handle transient failures. AWS Simple Notification Service (SNS) and Amazon Simple Queue Service (SQS) can be used for reliable event processing.

## 13. Cost Optimization:

Optimize the cost of running your serverless application. Configure auto-scaling policies based on demand to avoid over-provisioning. Use AWS Cost Explorer and AWS Budgets to monitor and analyze your serverless costs. Additionally, consider using AWS Lambda Layers to share code across functions and reduce duplication.

## 14. Integration with Existing Systems:

Leverage AWS services like AWS API Gateway and AWS EventBridge to seamlessly integrate your serverless application with existing systems. Use AWS Lambda as an integration layer to connect disparate components of your application architecture.

## <br/>

Serverless is a great tool. But remember that at the end of the day, it's just another tool. You should not be looking at forcing the tools to do the job. Designing for serverless architecture requires careful consideration of various aspects to ensure scalability, reliability, and cost-effectiveness. By focusing on function granularity, event triggering, state management, scalability, and other key areas, you can harness the full potential of serverless computing. AWS provides a rich set of services that can be used to address these considerations and build highly efficient and scalable serverless applications.
