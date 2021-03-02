import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        &#169; 2021 Animeaza All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
