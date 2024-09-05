import React, { useState } from "react";

function App() {

  const [count, setValue] = useState(0)


  function increase(){
    setValue(count+1)
  }
  function decrease(){
    setValue(count-1)
  }
  return (  <div className="container">
    <h1>{count}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>)

}

export default App;
