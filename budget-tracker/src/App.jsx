import './App.css';
import { useState } from 'react';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <h1>Balance: <span>&#x20B9;</span>{balance}</h1>
      <input type="number"
      value={amount}
      onChange={(e) => setAmount(Number(e.target.value))}
      />
      <br />
      <button onClick={() => setBalance(balance + amount)}>
        Add
      </button>
    </div>
  )
};

export default App;
