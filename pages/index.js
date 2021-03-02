import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.light}>アニメアザ</span>
          </h2>
          <h2 className={styles.title}>
            <span className={styles.primary}>ANIMEAZA</span>
          </h2>

          <p className={styles.paraText}>
            Let’s find out more about the world of anime and dive deep into it,
            one blog at a time.
          </p>

          <Link href='/blogs'>
            <a className={styles.btnPrimary}>
              <div className={styles.btnWrapper}>
                Let's Explore{' '}
                <svg
                  className={styles.icon}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.opm}></div>
      <div className={styles.kakashi}></div>
      <div className={styles.naruto}></div>
    </div>
  );
}
