import React from 'react';
import './Menu.css';

export default function Menu() {
  return (
    <section className="menu">
      <h2>Popular Tiffins</h2>
      <div className="menu-grid">
        <div className="card">
          <div className="img">Idli</div>
          <h3>Idli Vada</h3>
          <p>₹60</p>
        </div>
        <div className="card">
          <div className="img">Pongal</div>
          <h3>Pongal</h3>
          <p>₹70</p>
        </div>
        <div className="card">
          <div className="img">Dosa</div>
          <h3>Dosa</h3>
          <p>₹50</p>
        </div>
      </div>
    </section>
  );
}