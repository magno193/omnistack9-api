import React from 'react';
import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
  <div className="container">
    <img src={logo} alt="CoWorking"/>

    <div className="content">
      <p>
        Oferaça <strong>spots</strong> para programadores e encontre<strong>talentos</strong> para a sua empresa.
      </p>

      <form action="">
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
        />
      </form>
    </div>
  </div>
 );
}

export default App;