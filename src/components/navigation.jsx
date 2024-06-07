import React from 'react';

export default function Navigation() {
  return (
    <nav className ="container">
    <div>
              <img src="/images/brand_logo.png" alt="product" />
          </div>
          <ul>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Location</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a> </li>
          </ul>
          <button>
              Login
          </button>
      </nav>
  );
}
