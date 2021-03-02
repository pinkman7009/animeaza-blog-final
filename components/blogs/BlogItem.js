import React from 'react';
import styles from '../../styles/Blogs.module.css';
import Image from 'next/image';

const BlogItem = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.blogContent}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.paraText}>
          Written by <strong>{post.author}</strong>
        </p>
        <Image src={post.image[0].url} width={800} height={500} />
        <p
          className={styles.paraText}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></p>
      </div>
    </div>
  );
};

export default BlogItem;
