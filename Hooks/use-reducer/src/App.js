import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "counter":
      return {counter: state.counter + 1, showText: state.showText}
    case "showText":
      return {counter: state.counter, showText: !state.showText}
    default:
      return state;
  }
}

function UseReducer() {
  // 1st param countains all the state
  // 2nd param is the dispatch function used to call the reducer function when passed as a parameter 
  // to 'useReducer'
  const [state, dispatch] = useReducer(reducer, {counter:0, showText:true});

  return (
    <div>
      {state.counter}<br />
      <input type="button" value="Increment" onClick={() => {
        dispatch({type: "counter"})
        dispatch({type: "showText"})
      }}/>
      {state.showText && <p>Text is visibile</p>}
    </div>
  );
}

export default UseReducer;