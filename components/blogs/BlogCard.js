import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Blogs.module.css';

const BlogCard = ({ post }) => {
  return (
    <div className={styles.blogCard}>
      <Image
        src={post.image[0].url}
        width={400}
        height={400}
        alt={[post.title]}
        className={styles.img}
      />
      <div className={styles.cardContent}>
        <div className={styles.readTime}>{post.readTime}m read</div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.paraText}>
          Written by <strong>{post.author}</strong>
        </p>
        <p className={styles.paraText}>{post.excerpt}</p>
        <Link href='/blogs/[id]' as={`/blogs/${post.id}`}>
          <a className={`${styles.btn} ${styles.btnDark}`}>Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
