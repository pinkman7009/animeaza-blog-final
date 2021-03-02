import React from 'react';
import styles from '../../styles/Blogs.module.css';
import BlogCard from './BlogCard';

const BlogList = ({ posts }) => {
  return (
    <div className={styles.blogContainer}>
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
