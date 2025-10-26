import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-in">Craving your favorite<br />South Indian Tiffin?</h1>
        <p className="fade-in delay-1">Fresh, homemade, delivered hot in 30 mins</p>
        <button className="cta-btn fade-in delay-2">Order Now</button>
      </div>
      <div className="hero-img">
        <div className="food-plate"></div>
      </div>
    </section>
  );
}