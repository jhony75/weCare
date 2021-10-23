import { Link } from 'gatsby';
import React from 'react';

import * as styles from '../styles/card.module.scss';

function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={props.img} alt={props.alt} />
        </div>
        <div className={styles.cardBody}>
          <h2 className={styles.HeaderLink}>
            <Link to={props.link}> {props.title} </Link>
          </h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
