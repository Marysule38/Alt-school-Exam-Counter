import { useReducer } from "react";

function ReducerCounter() {
  
  
  function setValue(value) {
    let num = Number(value);
  
    return num;
  }
  function reducer(count, action) {
    switch (action.type) {
      case "set_value":
        return setValue(action.payload);
      case "increase":
        return ++count;
      case "decrease":
        return --count;
      case "reset":
        return 0;
      default:
        return count;
    }
  }
  function inputHandler(e) {
    dispatch({
      type: "set_value",
      payload: e.target.value,
    })
  }
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="counter">
      <h1>UseReducer Counter</h1>
      <div>
        <input
          type="text"
          placeholder="set counter value"
          onChange={inputHandler}
        />
        <h2 className="count-num">Count : {count}</h2>
        <div className="buttons-wrapper">
          <button
            onClick={() => {
              dispatch({ type: "increase" });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            reset
          </button>
          <button
            onClick={() => {
              dispatch({ type: "decrease" });
            }}
          >
            -
          </button>

        </div>
      </div>
    </div>
  );
};
export default ReducerCounter;

/*

Setup a custom counter hook with increment, decrement, reset, 
setValue functions with a valid UI and Implement a combination 
of states with a useReducer that implements a counter with the 
four evident features in the custom hook -  increment, 
decrement, reset, setValue. Implement a page for the 
custom hook, useReducer, 404, and a page to test error 
boundary and good SEO.

*/
