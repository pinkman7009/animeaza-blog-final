import React from 'react';
import styles from '../../styles/Home.module.css';
import BlogList from '../../components/blogs/BlogList';

const fetchPosts = async () => {
  // console.log(process.env.BLOG_URL);
  const res = await fetch(`https://strapi-animeaza.herokuapp.com/posts`);

  const data = await res.json();

  // console.log(data);

  return data;
};

export const getStaticProps = async ({ params }) => {
  const posts = await fetchPosts();
  return {
    props: { posts },
  };
};

const index = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={`${styles.primary} ${styles.marginL}`}>Blogs</span>
      </h2>
      <BlogList posts={posts} />
    </div>
  );
};

export default index;
