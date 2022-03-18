import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>點擊次數:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default App;
