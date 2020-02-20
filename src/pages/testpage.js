import React, { useState } from "react";



function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div class="py-32 py-32 text-center rounded overflow-hidden">
    <div className="py-32 px-32 text-center bg-gray-200">
      <h1 className="py-32 font-bold">{count}</h1>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={decrease}>-</button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={increase}>+</button>
      </div>
       </div>
  );
}

export default App;

