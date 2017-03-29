# stack-demo
Get started with the GP stack using this introductory demo application

## What is the stack?
The stack consists of two packages that together allow you to quickly build single page applications using the REACT and REDUX technologies. They exist to take away much of the boilerplate and leave you with more time to create innovative and useful applications.  These packages are:

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

### Features
This demo consists of a series of features. Each feature will typically consist of three items:

1. An `api` service
1. An `app` service
1. An `app` component

Each item is named after the feature, so for the example feature called `fetch` the project items will look like this:

```
stack-demo
  |-api
    |-src
      |-service
        |-fetch
  |-app
    |-src
      |-service
        |-fetch
      |-component
        |-fetch
```

## Feature: `hello`
This is the simplest feature in the demo. It is just a dumb REACT app component, and too simple to require an `api` or `app` service, but it shows you that the file is placed in `app/src/component/hello` folder.

It also shows one other crucial technique. For the stack to know about this component it must be included in the `index.js` found in the `app/src/component` folder. Below is content file, you can see the `hello` component being exported, along with the other components:

**app/src/component/index.js**
```javascript
import counter from './counter'
import errors from './errors'
import fetch from './fetch'
import gp from './gp'
import hello from './hello'
import thunks from './thunks'

export default {counter, errors, fetch, gp, hello, thunks}
```

Since the component has been correctly exported via the `index.js` file, it is available for use as a standard REACT component. Here it is being used in the `app/src/App.jsx` file.

**app/src/App.jsx**
```javascript
import { components, services } from './loader'
class component extends React.PureComponent {
  render () {
    return (
        ...
        <components.hello />
        ...
    )
  }
}
```

You can see that the `hello` component is exposed via the `components` object that has been imported in from the `loader` file. The `loader` file takes care of importing all the shared components and services you will need without you needing to touch it. All you need to do is make sure you export your own components and services via the corresponding `app/src/component/index.js` file and `app/src/service/index.js`

## Feature: `fetch`
