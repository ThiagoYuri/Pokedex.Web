import React from 'react';
import styles from './Image.module.scss';

const Image = (props) => (
  <section>
    <div className={styles.image}>
      <img alt="Loading" src={props.ImageURL}></img>
    </div>
  </section> 
);

Image.propTypes = {};

Image.defaultProps = {};

export default Image;
