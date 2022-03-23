# About the [useReducer()](https://reactjs.org/docs/hooks-reference.html#usereducer) Hook

The useReducer Hook is an alternative to the useState. It accepts 2 arguments, the first, is a reducer function which returns the new state along with the dispatch method. The second argument is the initialState of your component.

The reducer function created [here](./src/App.js) accepts 2 parameters. First, the 'state' of the component when the reducer function is called with the help of dispatch method.

Dispatch method is called on the onClick event of the button in [App.js](./src/App.js). Along with the method, the 'type' object is also sent which then returns the updated state from the reducer function.

useReduce is usually preferred when the state logic is complex and hard to manage.