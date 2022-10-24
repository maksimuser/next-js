import { FC } from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';

const Error: FC = () => {
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath('/');
    const timeId = setTimeout(() => {
      router.push(path);
    }, 2000);

    return () => clearTimeout(timeId);
  }, [router, path]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="404" />
        <Heading tag="h2" text="Something is going wrong..." />
      </div>
    </>
  );
};
export default Error;
