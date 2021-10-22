import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import '../styles/main.scss';

function BaseLayout({ children }) {
  return (
    <div className="Layout">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Content">{children}</div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default BaseLayout;
