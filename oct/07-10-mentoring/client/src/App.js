
import './App.css';

import { useState } from 'react';
function App() {
  const [message, setMessage] = useState('');
  const handleSave = async () => {

    const response = await fetch('post/save')
    console.log(response);
    const settings = {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    }

  }
  return (
    <div className="App">
      <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
    </div >
  );
}

export default App;
