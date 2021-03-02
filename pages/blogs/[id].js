import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Blogs.module.css';
import BlogItem from '../../components/blogs/BlogItem';

const getPost = async (id) => {
  const res = await fetch(`https://strapi-animeaza.herokuapp.com/posts/${id}`);

  const data = await res.json();

  return data;
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.id);
  return {
    props: post,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

const post = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <Link href='/blogs'>
        <a className={`${styles.btn} ${styles.btnPrimary}`}>Go Back</a>
      </Link>
      <BlogItem post={props} />
    </div>
  );
};

export default post;