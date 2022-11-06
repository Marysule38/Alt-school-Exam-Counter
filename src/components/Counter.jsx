import React from 'react'
import useCounter from "./CustomHooks/useCounter";

function Counter() {
  const { count, increase, decrease, reset, setValue } = useCounter(0)
  return (
    <div className="counter">
      <h1>Custom Hook Counter</h1>
      <div>
        <input
          type="text"
          placeholder="set counter value"
          onChange={setValue}
        />
        <h2 className="count-num">Count : {count}</h2>
        <div className="buttons-wrapper">
          <button onClick={increase}>+</button>
          <button onClick={reset}>reset</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>

    </div>
  )
}
export default Counter;
