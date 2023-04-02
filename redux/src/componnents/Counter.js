import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../reducers/counterReducer";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const value = Number(amount) || 0;
  const resetAll =()=>{
    setAmount(0);
    dispatch(reset())
  }
  

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <input
        type="text"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={()=>{dispatch(incrementByAmount(value))}}>Add Amount</button>{" "}
      <button onClick={resetAll}> Reset </button>
    </section>
  );
};

export default Counter;
