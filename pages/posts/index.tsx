import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Heading from '../../components/Heading';
import { postType } from '../../types';

type postsTypeProps = {
  posts: [postType];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { posts: data } };
};

const Posts: FC<postsTypeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:"></Heading>
      <ul>
        {posts &&
          posts.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Posts;
