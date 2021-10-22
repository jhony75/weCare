import React from 'react';
import BaseLayout from '../components/BaseLayout';

function About() {
  return (
    <div className="About">
      <BaseLayout>
        <div className="ContactPersons">
          <div className="Person">
            <p>Derek</p>
            <p>Linkdin</p>
          </div>
          <div className="Person">
            <p>Jônatas</p>
            <p>Linkdin</p>
          </div>
          <div className="Person">
            <p>Leme</p>
            <p>Linkdin</p>
          </div>
          <div className="Person">
            <p>Sitta</p>
            <p>Linkdin</p>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
}

export default About;
