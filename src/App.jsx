import React, { useState } from 'react';
import Nav from './components/Navbar'; 
import Btn from './components/Button'; 
import './App.css';

function App() {
  const [passage, setPassage] = useState('');

  function toLowerCase(e) {
    e.preventDefault();
    if (passage.trim() !== '') {
      setPassage(passage.toLowerCase());
    } else {
      alert('No text to lower case!');
    }
  }
  function toUpperCase(e) {
    e.preventDefault();
    if (passage.trim() !== '') {
      setPassage(passage.toUpperCase());
    } else {
      alert('No text to upper case!');
    }
  }
  function clearPassage(e) {
    e.preventDefault();
    if (passage.trim() !== '') {
      setPassage('');
    } else {
      alert('No text to clear!');
    }
  }
  function removeSpace(e) {
    e.preventDefault();
    if (passage.trim() !== '') {
      setPassage(passage.replace(/\s+/g, ' ').trim());
    } else {
      alert('No text to remove space!');
    }
  }
  function copyPassage(e) {
    e.preventDefault();
    const textarea = document.querySelector('#textarea'); // Select the textarea element

    if (passage.trim() !== '') {
      textarea.select();
      navigator.clipboard.writeText(passage)
        .then(() => {
          alert('Text copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    } else {
      alert('No text to copy!');
    }
  }
  function words(para) {
    const passage = para.split(' ');
    passage.filter((res) => {
      return res !== " ";
    });
    return passage.length;
  }

  return (
    <>
      <Nav />
      <div className='body'>
        <div>
          <h1>Type your text below to analyze.</h1>
          <textarea
            className='textareaStyle'
            id='textarea'
            placeholder='Enter your text here...'
            value={passage} // Use the "value" prop to bind the state
            onChange={(e) => setPassage(e.target.value)} // Update state as user types
          ></textarea>
          <div className='buttons'>
            <Btn title='Lower Case' func={toLowerCase} />
            <Btn title='Upper Case' func={toUpperCase} />
            <Btn title='Clear All' func={clearPassage} />
            <Btn title='Copy All' func={copyPassage} />
            <Btn title='Remove Space' func={removeSpace} />
          </div>
          <div className='summary'>
            <h1>Your Text Summary</h1>
            <h4>Total Alphabets = {passage.length}</h4>
            <h4>Total Words = {passage !== '' ? words(passage) : '0'}</h4>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
