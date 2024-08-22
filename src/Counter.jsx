import React, {useState} from "react";

function Counter(){
  
  const[count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }
  
  function decrement(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }


  return(
    <>
    <div className="counter-container">
      <div className="display-cont">
      <p className="display">{count}</p>
      </div>
      <div className="btn">
        <button className="btn-d" onClick={decrement}>Decrement</button>
        <button className="btn-r" onClick={reset}>Reset</button>
        <button className="btn-i" onClick={increment}>Increment</button>
      </div>
    </div>
    </>
  );



}

export default Counter;