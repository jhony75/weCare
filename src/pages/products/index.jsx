import { Link } from 'gatsby';
import React from 'react';

function Products() {
  return (
    <>
      <div className="Products__Header">
        <h1>Nossos produtos</h1>
      </div>
      <div className="Products__List">
        <div className="Products__card">
          <h3>CardioPatch</h3>
          <h4>Um patch para monitoramento cardíaco.</h4>
          <p>
            Patch para acompanhamento médico ou prevenção de doenças cardíacas.
          </p>
          <Link to="./cardioPatch">Saiba mais.</Link>
        </div>
        <div className="Products__card">
          <h3>Totem</h3>
          <h4>Totem de triagem hospitalar.</h4>
          <p>
            Desenvolvido para tirar profissionais de enfermagem dos postos de
            triagem agilizando este processo e permitindo que estes
            profissionais estejam onde são mais necessários.
          </p>
          <Link to="./totem">Saiba mais.</Link>
        </div>
      </div>
    </>
  );
}

export default Products;
