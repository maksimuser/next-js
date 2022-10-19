import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Socials from '../components/Socials';
import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';
import { socialsType } from '../types';

type socialsTypeProps = {
  socials: socialsType;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/socials`);

    const data = await res.json();

    return { props: { socials: data } };
  } catch (err) {
    console.log(err);
    return { props: { socials: null } };
  }
};

const Home: FC<socialsTypeProps> = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="Next.js Application" />
        <Socials socials={socials} />
      </div>
    </>
  );
};

export default Home;
