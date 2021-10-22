import { Link } from 'gatsby';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <h1>weCare</h1>
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/about">Sobre nós</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </nav>
  );
}

export default Navbar;
