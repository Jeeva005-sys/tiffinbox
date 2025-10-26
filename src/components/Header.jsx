import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">TiffinBox</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">How it Works</a>
        <a href="#">Contact</a>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
}