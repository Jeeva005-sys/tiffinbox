import React from 'react';
import './Timeline.css';

export default function Timeline() {
  return (
    <section className="timeline">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <div className="icon">1</div>
          <h3>Choose Plan</h3>
        </div>
        <div className="step">
          <div className="icon">2</div>
          <h3>We Cook</h3>
        </div>
        <div className="step">
          <div className="icon">3</div>
          <h3>Delivered</h3>
        </div>
      </div>
    </section>
  );
}