import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/Counter.css';

export default function App() {
    const [count, setCount] = useState(0);
  
    let incrementCount = () => {
      setCount(count + 1);
    };
  
    let decrementCount = () => {
      setCount(count - 1);
    };
    let reset =() => {
      setCount ( 0);
    };

  
    return (
      <div className="app">
        <div>
          <div class="count">
            <h1>Counter</h1>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"DECREASE"} action={decrementCount}  />
            <Button title={"RESET"} action={reset} />

            <Button title={"INCREASE"} action={incrementCount}  />
          </div>
        </div>
      </div>
    );
  }