# About the [useState()](https://reactjs.org/docs/hooks-reference.html#usestate) Hook

The useState() accepts one argument i.e the 'initial state' itself. 

### Declaration
- const [state, setState] = useState(initialState);

'state' returns the stateful value and the 'setState' is used to set or update the value returned by the 'state'. Everytime the 'setState' is called, the component is re-rendered updating the value.