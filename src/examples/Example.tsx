import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '0 auto', padding: '2rem' }}>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>Example.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Example;
