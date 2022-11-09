import React, { useState } from "react";


function App() { 
   // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (<div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>increment </button>
  </div>
  ) 
  ;
}

export default App;
