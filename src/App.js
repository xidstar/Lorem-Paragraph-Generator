import React, { useState } from 'react';
import data from './data';

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if (amount <= 0) {
      amount = 1;
    }

    if (amount > 5) {
      amount = 5;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className="lorem-container">
      <h1>Tired of boring ipsum?</h1>
      <form className="lorem-input" onSubmit={handleSubmit}>
        <h3>Paragraphs</h3>
        <input type="number" name="amount" className="" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="lorem-btn" >Generate</button>
      </form>
      <div className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
      </div>
    </section>
  );
}

export default App;
