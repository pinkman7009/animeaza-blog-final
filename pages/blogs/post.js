import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Blogs.module.css';
import BlogItem from '../../components/blogs/BlogItem';

const post = () => {
  return (
    <div>
      <Link href='/blogs'>
        <a className={`${styles.btn} ${styles.btnPrimary}`}>Go Back</a>
      </Link>
      <BlogItem />
    </div>
  );
};

export default post;
