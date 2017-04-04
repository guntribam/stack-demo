# stack-demo
Get started with the GP stack using this introductory demo application

## What is the stack?
The stack exists to allow you to quickly build single page applications using the REACT and REDUX technologies. It demands a specific way of writing your code, as well as helper features, that together take away much of the boilerplate and leave you with more time to create innovative and useful applications.

The stack consists of the following two packages:

* [stack-redux-app](https://github.com/gp-technical/stack-redux-app)
* [stack-redux-api](https://github.com/gp-technical/stack-redux-api)

The stack is deliberately opinionated. This means there _is_ a right way to do things and the packages have been designed to work best if they are used in the right way.

This reference demo has been written to give you concrete examples of the right way to use the packages. It does nothing in particular, but what it does do has been selected to provide a graduated introduction via a series a of _features_. In stack-speak, a feature just means all the bits of code that, when taken together, provide a useful chunk of functionality. As you will see, each feature will typically have code that runs on the server (the `api` service), the client (the `app` service) and some UI code (the `app` component).

Starting simply then, the stack-demo shows you how to structure your project, re-use the shared features supplied by the stack and then write your own custom features that together go to make up your own stack-application.

## Getting Started
You will probably need some devops help getting set up to run this demo. The stack does a number of complex tasks for you, for example it ensures your application is capable of Single Sign On (SSO) and it also performs a security handshake with the main GP API so your applications have access to the GP content and data. All this requires setup and so you should contact [Jonny](janderson@goodpractice.com) or [Daniel](ddeak@goodpractice) to see about getting everything working.

## The stack-application Folder Structure
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

### Some Theory
>At its heart, the stack is just a web-socket that connects your `app` to your `api`. As is usual for a REACT / REDUX application, when you dispatch a REDUX action then the expectation is that somewhere in your code there will be reducer(s) listening out for that action so that local state can be changed. Your REACT components then react to these changes and update the UI.
>
>All this remains true for a `stack-application` with one additional consideration - by default any dispatched REDUX action will also be broadcast to your `api` where it can be trigger server-side processing. Since web-sockets work in both directions, so your `api` can also dispatch actions that your `app` can listen out for, for example to return data requested by the `app`.
>
>The upshot of this is the machine boundary between your `app` and your `api` is eliminated. You do not need to worry about the plumbing that allows your browser-side `app` code to communicate with the server-side `api` code. Internal REST apis and http calls within your application space are a thing of the past. Everything is mediated via dispatched REDUX actions and the changes to local REDUX state they cause.

### Features
This demo consists of a series of features.

* #### [hello](#feature-hello)

  A simple hello-world react component. No stack involved.

* #### [fetch](#feature-fetch)

  Shows the three ways your feature can get it's hands on some data:
  1. From the local `app`
  2. Automatically as start-up initialisation data from the `api`
  3. Requested from the `api` during normal running

  This is also a _Grand Tour_ of most of the feature files you will need to write any complex feature. The rest of the features below are much shorter as they only explain how they differ from this main example.

* #### [counter](#feature-counter)


Each feature will typically consist of three items:

* An `api` service

  This is the code that runs on the server. It will typically call out to your data-store and return data payloads or perhaps interact securely with third party APIs
* An `app` service

  This is the code that runs in the browser and is used to update your application's REDUX state, dispatch REDUX actions and request / receive data from the application api.
* An `app` component

  The is the REACT component used to surface and interact with the application state

Each feature has a unique `name` and in the project files, each feature item-folder uses the feature-name. For example, one of the first stack-demo features is called `fetch`, so for this feature the project item-folders would be as follows:

```
stack-demo
  |-api
    |-src
      |-service
        |-fetch    <- the api service
  |-app
    |-src
      |-component
        |-fetch    <- the app component
      |-service
        |-fetch    <- the app service
```

### The Feature `index.js` files
For the stack to know about each part of a feature it must be exported via the relevant `index.js` file.  The folders that contain the api services, the app components and the api services all have a single index.js file and you must export your feature through these so the stack can discover them.

```
stack-demo
  |-api
    |-src
      |-service
        index.js      <- the index for all api services
        |-fetch
  |-app
    |-src
      |-component
        index.js      <- the index for all app components
        |-fetch
      |-service
        index.js      <- the index for all app services
        |-fetch
```
Here is the format for exporting each of the feature elements via the index files.

### _api/src/service/index.js_
```javascript
import fetch from './fetch'
export default {fetch}
```
### _app/src/component/index.js_
```javascript
import fetch from './fetch'
export default {fetch}
```
### _app/src/service/index.js_
```javascript
import fetch from './fetch'
export default {fetch}
```

You can see the `fetch` feature being exported in the same way via the three index files. This feature is now fully wired up and ready to use elsewhere in your code. For example, here is the fetch REACT component being used in the `app/src/App.jsx` file.

### _app/src/App.jsx_
```javascript
import { components } from './loader'
class component extends React.PureComponent {
  render () {
    return (
        ...
        <components.fetch />
        ...
    )
  }
}
```

From the `App.jsx` code above you can see that accessing the `fetch` component is achieved through the `components` object and this is imported from the stack `loader`. The `loader` object contains all the available app components and services, and since we have correctly exported our `fetch` component, we can now access here and use it in the `App.jsx` file.

Please note that you do not need to touch the `loader`. It takes care of automatically loading all the correctly exported components and services so you can import them whenever you want to use them. This includes any shared features supplied by the stack packages. All you need to do is make sure you export your own features via the index files as shown above so the `loader` can find them.

For completeness, here is the real `app/src/service/index.js` file showing all the stack-demo app services being exported.

### _app/src/service/index.js_
```javascript
import counter from './counter'
import errors from './errors'
import fetch from './fetch'
import gp from './gp'
import thunks from './thunks'

export default {counter, errors, fetch, gp, thunks}
```
There now follows a run through each of the Features in the stack-demo.

# Feature: `hello`

This is the simplest feature in the demo. It is just a dumb REACT app component and too simple to require an api or app service. It is here to show you that you don't need to do anything special if you just want to include a standard REACT component.

### _app/src/component/hello/index.js_
```javascript
import React from 'react'

const style = {
  margin: 20,
  padding: 20,
  borderColor: 'lightgray',
  borderStyle: 'solid',
  borderWidth: 1,
  backgroundColor: 'White'
}

class component extends React.PureComponent {
  render () {
    return (
      <div style={style}>
        <h2>Hello World</h2>
      </div>
    )
  }
}

export default component
```

### _app/src/component/index.js_
```javascript
import counter from './counter'
import errors from './errors'
import fetch from './fetch'
import gp from './gp'
import hello from './hello'      <- export the hello feature component
import thunks from './thunks'

export default {counter, errors, fetch, gp, hello, thunks}
```
### _app/src/App.jsx_
```javascript
import { components } from './loader'
class component extends React.PureComponent {
  render () {
    return (
        ...
        <components.hello />      <- use the hello feature component via the loader.components
        <components.fetch />
        <components.counter />
        <components.errors />
        <components.thunks />
        <components.gp />
        ...
    )
  }
}
```

You can see the `hello` component has been exported via the `app/src/component/index.js` file, this makes it available to use via the `loader` object.

# Feature: `fetch`
This feature shows how an `app` component can get the data it needs. Either as:

* Initialisation data 'pushed' from the `api` at startup
* Remote data 'fetched' from the `api` as required
* Local data supplied by the `app`

Before looking into how the `fetch` feature manages its data its time to look at the general feature structure. All features follow the same structure.

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
The feature consists of three parts and although not all parts are always required for all features, _most_ useful features will consist of:

* The `api` service

  This is where you listen for and process server-side actions. The actions are typically dispatched from the app and are automatically broadcast to the api by the stack. You can also dispatch actions from the api back to the app and deliver initialisation data for your feature at application start-up

* The `app` component

  This is the REACT UI component. It is fairly standard and makes use of a few stack features that make dispatching actions and re-using other feature components easy.

* The `app` service

  This contains all the files required to set-up the REDUX actions and types, listen out for actions via a `reducer` and serve up state-tree data-elements via the feature's `selector`.

We will now use the `fetch` feature to go through each of the files that make up a feature. The `fetch` is actually pretty simple, but it deliberately touches on all the pieces you will need to write your own complex features.

## The `app` Service Files

These files run in the browser. They use stack functions to define REDUX types and actions, take care of dispatching the actions and change local REDUX state in response to actions.

```
|-service
  |-fetch
    |-action.js     <- defines the REDUX actions and types for this feature
    |-index.js      <- exports the feature's app-service items
    |-name.js       <- supplies the unique feature name
    |-reducer.js    <- listens out for and processes REDUX actions
    |-selector.js   <- simplifies access to the feature's REDUX state tree
```

### _app/src/service/fetch/name.js_
```javascript
const name = 'fetch'

export default name
```
Exports the unique feature name. This is used by other feature components and by the stack, for example to correctly namespace generated REDUX Actions.

### _app/src/service/fetch/action.js_
```javascript
import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-redux-app'

const api = makeTypes(name, ['fromApi'])
const local = makeTypes(name, ['fromLocal'])

const actions = {...makeActions(api), ...makeActions(local, {local: true})}
const types = {...api, ...local}

export { actions, types }

```
Exports the generated REDUX `actions` and `types`. The `stack-redux-app` package provides the `makeActions` and `makeTypes` functions to remove nearly all of the REDUX boilerplate.

Above you see two different types of action being generated. The actions marked with the `local` flag will only be dispatched to the reducers in the `app`, the `api` will not be involved.

If the `local` flag is not set (the default case) then the actions will be automatically broadcast to the `api` where they can be picked up by the api service `processor` file - more on these important, server-side `processor` files later on ...

### _app/src/service/fetch/reducer.js_
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

  This action is dispatched just once by the `api` during application start-up (but only if the api service exports an `initialiser.js` file). It delivers a payload of feature specific initialisation data supplied by the `api`. Initialisation data delivered in this way is typically useful when your feature relies on a database or third-party api data-source.

* `fetchFromLocal`

  This is a traditional REDUX action. It is dispatched and processed locally. The type-name is a concatenation of the feature-name `fetch`+`fromLocal`, the type-name supplied to the `makeTypes` function in the `action.js` file above.

* `fetchFromApiResponse`

  This is the result of dispatching a REDUX action that was then processed by the `api`. If the `api` has data to return it will dispatch an action of type `<typeName>Response`. The type-name is concatenation of the feature-name `fetch` + `fromApi` (the type-name supplied to the `makeTypes` function) + `Response`, the `api` response suffix

### _app/src/service/fetch/selector.js_
```javascript
import name from './name'

const get = (state) => {
  return state[name]
}

const getData = (state) => {
  return get(state).data
}

const getSource = (state) => {
  return get(state).source
}

export default {get, getData, getSource}
```
A selector is used to easily locate elements within the feature's REDUX state tree. When you require data from REDUX state you should always go through the appropriate feature's selector. You will typically see these being used by REACT components as a data-source for the components props.

#### Optimising Selector Code
The selector code shown above is simple. For more complex selectors and especially where the optimisation of cached data is desired, you should consider using a REDUX selector library such as [reselect](https://github.com/reactjs/reselect). Regardless of your implementation details, the `selector.js` file above is the correct place to put the selector code for a given feature.

### _app/src/service/fetch/index.js_
```javascript
import { actions, types } from './action'
import reducer from './reducer'
import selector from './selector'

export default {actions, types, reducer, selector}
```

It is important that you export the service files via the feature's `index.js`.
### _app/src/service/index.js_
```javascript
import counter from './counter'
import errors from './errors'
import fetch from './fetch'
import gp from './gp'
import thunks from './thunks'

export default {counter, errors, fetch, gp, thunks}
```
The feature service is then further exported through the `app/src/service/index.js` file. This makes the feature available via the `loader`.


## The `api` Service Files

```
|-service
  |-fetch
    |-index.js        <- exports the feature's api-service items
    |-initialiser.js  <- provides feature specific data at application start-up
    |-processor.js    <- listens out for and processes REDUX actions
```

### _api/src/service/fetch/initialiser.js_
```javascript
const initialiser = async () => {
  return `This is the initial value for the data. It was sent by the stack-demo API, specifically the 'fetch' service initialiser, at startup.`
}

export default initialiser
```
This file is optional. If present the `initialiser` function must be marked as `async`. The function can then directly return whatever data is required by the feature at start-up. A benefit of being an `async` function is the ability to `await` the results of any database or third-party api calls you might need when gathering initialisation data.

The data returned, in common with all data returned by the api, can be normal javascript types or plain objects, it does not need to be JSON. The stack takes care of transmitting the data for you (over the websocket) by dispatching a special action with the type-name `<featureName>_init`. This is then processed by the feature's app reducer (see the [reducer](#appsrcservicefetchreducerjs) code above)

### _api/src/service/fetch/processor.js_
```javascript
import { makeProcessor } from '@gp-technical/stack-redux-api'

const processor = async (action) => {
  var {types, type, data} = action

  switch (type) {
    case types.fetchFromApi:
      return 'Hello from the stack-demo API'
  }
}

export default makeProcessor(processor)
```
An api `processor` plays a similar role as the app `reducer`. It listens out for actions and processes those it is interested in. It is important that you use the `makeProcessor` function to export the actual processor. This allows for error reporting and for more advanced techniques covered later.

Your processor can simply return data, as you see above, and this will automatically be sent back to the app as the payload of a generated `<typeName>Response` action. In this case the action type-name used to return the data would be `fetchFromApiResponse` (see the [reducer](#appsrcservicefetchreducerjs) code above).

### _api/src/service/fetch/index.js_
```javascript
import initialiser from './initialiser'
import processor from './processor'

export default { initialiser, processor}

```
It is important that you export the api service files via the feature's `index.js` file.

## The `app` Component
### _app/src/component/fetch/index.jsx_
```javascript
import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { actionHub, services, components } from '../../loader'

const buttonStyle = {
  margin: 12
}

class component extends React.PureComponent {
  onFetchFromLocal = () => {
    this.props.fromLocal('This is the data that has been sourced locally.')
  }
  onFetchFromApi = () => {
    this.props.fromApi()
  }
  onReload = () => {
    window.location.reload()
  }
  render () {
    var {source, data} = this.props
    return (
      <components.Box>
        <h2>Fetching Data</h2>
        //
        // ... More REACT Markup
        //
        <RaisedButton label='Fetch Data Locally' onClick={this.onFetchFromLocal} style={buttonStyle} />
        <RaisedButton label='Fetch Data from the API' onClick={this.onFetchFromApi} style={buttonStyle} />
        <RaisedButton label='Reload the Page' onClick={this.onReload} style={buttonStyle} />
        //
        // ... More REACT Markup
        //        
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  source: services.fetch.selector.getSource(state),
  data: services.fetch.selector.getData(state)
})

const mapDispatchToProps = (dispatch) => ({
  fromLocal: (data) => dispatch(actionHub.FETCH_FROM_LOCAL(data)),
  fromApi: () => dispatch(actionHub.FETCH_FROM_API())
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
```
The app component is written using the standardised style shown above. All stack components conform to this style. The stack provides the following helper objects via the `loader` file.

* _actionHub_

  This contains _all_ the actions that have been defined by _any_ feature in the app. The action names conform to the standard REDUX format. They are capitalised and are namespaced with the feature name that generated them. You can use the actionHub throughout your code to dispatch any action, or combinations of actions (thunks), regardless of which feature generated them. You will often find them being dispatched via the `mapDispatchToProps` function.

* _services_

  This contains all the app services plus any shared services supplied by the `stack-redux-app` package. Typically these will be used to gain access to a features `selector` and so to it's state tree. These are used, in any combination from any service, as props for the component via the `mapStateToProps` function.

* _components_

   This contains all the app components you have exported via the `app/src/component/index.js` file plus any shared services supplied by the `stack-redux-app` package. In the code above the `components.Box` is used. This is an example of a shared component that is supplied by the `stack-redux-app` package.
