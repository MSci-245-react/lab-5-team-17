import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from './reducers/counterSlice';

const IncrementByAmount = () => {
  const [inputAmount, setInputAmount] = useState(1);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputAmount(Number(e.target.value));
  };
  const handleClick = () => {
    dispatch(incrementByAmount(inputAmount));
    setInputAmount(1); 
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <input
        type="number"
        value={inputAmount}
        onChange={handleChange}
        min={1}
        step={1}
      />
      <button onClick={handleClick}>Increment by Amount</button>
    </div>
  );
};

export default IncrementByAmount;
