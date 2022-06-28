import './App.css';
import Weather from "./components/Weather";
import React from 'react';

function App() {
  return (
    <div>
    <header>
      <h1 className="underline">React Weather App</h1>
    </header>
    
    <main>
      <Weather />
    </main>
    <footer>Created by Alyzen Jeraj</footer></div>
  
  );
}

export default App;
