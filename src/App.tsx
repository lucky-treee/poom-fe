import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="font-bold flex justify-center">
      Hello, Zero Waste Shop Map!
      <p>
        {`count: ${count}`}
      </p>
      <button
        onClick={() => setCount(count => count + 1)}
      >
        {`(+)`}
      </button>
    </div>
  );
}

export default App;
