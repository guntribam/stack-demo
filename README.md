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
      |-component
      |-service
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
      |-component
        |-fetch
      |-service
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

You can see that the `hello` component is exposed via the `components` object that has been imported in from the `loader` file. You do not need to touch the `loader` file. It takes care of exporting all the shared components and services so you can import them whenever you want to use them. All you need to do is make sure you export your own components and services via the corresponding `app/src/component/index.js` file and `app/src/service/index.js` so the `loader` can find them.

## Feature: `fetch`
This feature shows how a `app` component gets its data.

1. As initialisation data 'pushed' from the `api` at startup
1. As remote data 'fetched' from the `api` as required
1. As local data supplied by the `app`

### Feature Structure

```
stack-demo
  |-api
    |-src
      |-service
        |-fetch
          |-index.js
          |-initialiser.js
          |-processor.js
  |-app
    |-src
      |-component
        |-fetch
          |-index.js
      |-service
        |-fetch
          |-action.js
          |-index.js
          |-name.js
          |-reducer.js
          |-selector.js
```
From the structure above you can see that, in common with most features, the `fetch` feature has a REACT UI component found in `app/src/component/fetch/index.js`.

It is also the first feature to require a proper service. A feature's service is typically split into two folders, the `app` 'service' folder and the `api` 'service' folder. Each of the service folders contain several specially named files. Depending on capabilities of your feature you may not need all the files, but the files are always named this way. It is very important that you name your feature files in the same way.

### The `app` Service Files

**app/src/service/fetch/name.js**
```javascript
const name = 'fetch'

export default name
```
Exports the unique feature name. This is used by other feature components and by the stack, for example to correctly namespace generated REDUX Actions.

**app/src/service/fetch/action.js**
```javascript
import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-redux-app'

const api = makeTypes(name, ['fromApi'])
const local = makeTypes(name, ['fromLocal'])

const actions = {...makeActions(api), ...makeActions(local, {local: true})}
const types = {...api, ...local}

export { actions, types }

```
Exports the generated REDUX actions and types. The `stack-redux-app` package provides the `makeActions` and `makeTypes` functions to remove nearly all of the REDUX boilerplate.

Above you see two different types of action being generated. The actions marked with the `local` flag will only be dispatched to the reducers in the `app`, the `api` will not be involved.

If the `local` flag is not set (the default case) then the actions will be dispatched to the local reducers as before but will also be automatically broadcast, via a bi-directional web-socket created for you by the stack, to the `api` where they can be picked up by the api service `processor` file (more on this further on).

**app/src/service/fetch/reducer.js**
```javascript
const reducer = (state = {}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.fetch_init:
      return {...state, data, source: 'initial state pushed by the api'}
    case types.fetchFromLocal:
      return {...state, data, source: 'data fetched locally from the app'}
    case types.fetchFromApiResponse:
      return {...state, data, source: 'data fetched via the application api'}
    default:
      return state
  }
}

export default reducer
```
The REDUX reducer file listens for REDUX actions that have been dispatched either locally by the `app` or remotely by the `api`. The case statement tests the type of the action that has been received and acts accordingly. The type names have been generated for you from the names supplied to the `makeTypes` function above. They are namespaced with the name of the feature found in the `name.js` file.

This reducer shows the three different types of action that the stack will generate for you:

* `fetch_init`

  This is a special action that is dispatched just once by the `api` during application startup. It supplies a payload of feature specific initialisation data supplied by the `api`. This is optional, but typically  useful when your feature relies on data coming from a database or third-party api.

* `fetchFromLocal`

  This is a traditional REDUX action. It is dispatched and processed locally. The type-name is a concatenation of the feature-name `fetch` plus the type-name `fromLocal`.

* `fetchFromApiResponse`

  This is the result of dispatching a REDUX action that was then processed by the `api`. If the `api` has data to return it will dispatch an action of type `<typeName>Response`. The type-name is concatenation of the feature-name `fetch` plus the originally dispatched type-name `fromApi` plus the response suffix `Response`
