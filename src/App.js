import React, { useState } from 'react';
import './App.css';

function GibaPics(props) {
  console.log(props.pics)
  return props.pics.map((a, index) => <img key={index} src={`${a.toUpperCase()}.png`} width={80} height={80} style={{ display: 'inline-block'}} />)
}

function App() {
  const [gibaWords, setGiba] = useState(['6', '1', 'b', 'a'])
  function parseNew(input) {
    setGiba(input.target.value.replace(/[^a-fA-F0-9]/g, '').split(''))
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginBottom: '20px'}}>
          <input onChange={parseNew} value={gibaWords.join('')}/>
        </div>
        <div><GibaPics pics={gibaWords} /></div>
      </header>
    </div>
  );
}

export default App;
