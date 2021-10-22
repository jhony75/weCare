import React from 'react';

import * as styles from '../styles/card.module.scss';

function Card(props) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardWrapper}>
        <div className={styles.Card__Body}>
          <img classname={styles.Card__Image} src={props.img}></img>
          <h2 className={styles.Card__Title}>{props.title}</h2>
          <p className={styles.Card__Description}>{props.desc}</p>
        </div>
        <button className={styles.Card__Button}>Saiba mais!</button>
      </div>
    </div>
  );
}

export default Card;
