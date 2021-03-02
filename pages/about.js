import React from 'react';
import styles from '../styles/Home.module.css';

const about = () => {
  return (
    <>
      <div className={styles.levi}></div>
      <div className={styles.about}>
        <div className={styles.leviWrapper}></div>
        <div className={styles.content}>
          <h2 className={`${styles.title}`}>
            <span className={styles.primary}>About</span>
          </h2>

          <p className={`${styles.paraText} `}>
            This is an anime blogging site where we get to explore the world of
            anime and read more about them.
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
