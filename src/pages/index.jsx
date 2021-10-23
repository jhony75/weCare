import React from 'react';
import BaseLayout from '../components/BaseLayout';
import '../styles/main.scss';
import * as styles from '../styles/home.module.scss';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <BaseLayout>
      <div className={styles.HomeWrapper}>
        <div className={styles.TitleWrapper}>
          <h1 className={styles.Title}>Nós somos a weCare!</h1>
        </div>
        <p>
          Criada a partir de um projeto de iniciação cientifica da FIAP, a
          weCare é uma startup voltada para a área da saúde.
        </p>
        <p>
          Nosso portfólio hoje conta com dois produtos. Um patch para
          monitoramento cardíaco e um robô para automatização do processo de
          triagem.
        </p>
        <p>
          Estamos em busca de financiamento para tirar nossos projetos do papel,
          e assim revolucionar a área médica no Brasil e no mundo aos poucos,
          focando sempre no custo-beneficio e no bem-estar de nossos clientes.
        </p>
        <hr />
        <p>
          Por favor, tome um minuto para conhecer nossos{' '}
          <Link to="/products/">projetos</Link>.
        </p>
        <div className={styles.iFrameWrapper}>
          <h2>Vídeo de introdução: CardioPatch</h2>
          <iframe
            width="800"
            height="600"
            src="https://www.youtube-nocookie.com/embed/i8bC1QELy8c"
            title="Projeto CardioPatch"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"
            allowFullScreen="allowFullScreen"
          ></iframe>
        </div>
      </div>
    </BaseLayout>
  );
}
