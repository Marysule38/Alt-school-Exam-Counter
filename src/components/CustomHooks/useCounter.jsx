import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  function increase() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }
  function reset() {
    setCount(0);
  }
  function setValue(e) {
    let num = Number(e.target.value);

    setCount(num);
  }
  return { count, increase, decrease, reset, setValue };
}
