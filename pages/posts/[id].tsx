import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import { postType } from "../../types";

type postTypeProps = {
  post: postType;
};

// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map(({ id }) => ({ params: { id: id.toString() } }));
  //   https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx?.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { post: data } };
};

const Post: FC<postTypeProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
