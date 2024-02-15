import logo from './logo.svg';
import './App.css';
//the adapter makes webrtc play better across browsers
import adapter from 'webrtc-adapter';
//get the io object from socket.io
import io from 'socket.io-client'
import { useState } from 'react';

function App() {

  useState(()=>{
    //run on load...
    io.connect('https://localhost:9000',{
      rejectUnauthorized: false //ONLY OK FOR LOCAL
    })
    //try GUM
    const stream = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })


  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
