import React from 'react';
import "./Button.css";

function Button({className, value, onClick, onSubmit}) {
  return (
    <button className={`btn ${className}`} onClick={onClick} onSubmit={onSubmit}>{value}</button>
  )
}

export default Button
