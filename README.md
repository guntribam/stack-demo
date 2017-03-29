# stack-demo
Get started with the GP stack using this introductory demo application

## What is the stack?
The `stack` consists of two packages that together allow you to quickly build single page applications using the REACT and REDUX technologies. They exist to take away much of the boilerplate and leave you with more time to create innovative and useful applications.  These packages are:

* [stack-redux-app](https://github.com/gp-technical/stack-redux-app)
* [stack-redux-api](https://github.com/gp-technical/stack-redux-api)

The stack is deliberately opinionated. This means there _is_ a right way to do things and the packages have been designed to work best if they are used in the right way.

This demo has been written to give you concrete examples of the right way to use the packages. It is a reference demo, it does nothing in particular, but what it does do has been selected to provide a graduated introduction to the ways of the stack.

## Getting Started
You will need help getting set up to run this demo. The stack does a number of complex tasks for you, for example it ensures your application is capable of Single Sign On (SSO) and it also performs a security handshake with the main GP API so your applications have access to the GP content and data. All this requires setup and so you should contact [Jonny](janderson@goodpractice.com) or [Daniel](ddeak@goodpractice) to see about getting everything working.


## Project Folder Structure
The folder structure for a stack project should be:
```
my-project
  |-api
    |-src
      |-service
  |-app
    |-src
      |-service
      |-component
```
You can see that the application is first divided into two main domains, the `api` and the `app`. Both of these contain a `service` folder. The `app` also contains a `component` folder. It is important that you structure your stack application in this way, using these names.
