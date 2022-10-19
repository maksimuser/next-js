import { FC } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { contactType } from "../../types";

type contactTypeProps = { contact: contactType };

// https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx?.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // const data = null;
  const data = await res.json();
  if (!data) {
    return {
      // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#notfound
      notFound: true,
    };
  }
  return { props: { contact: data } };
};

const Contact: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
