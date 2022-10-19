import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import { contactType } from "../../types";

type contactsTypeProps = { contacts: [contactType] };

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = null;
  const data = await res.json();

  if (!data) {
    return {
      // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#notfound
      notFound: true,
    };
  }
  return { props: { contacts: data } };
};

const Contacts: FC<contactsTypeProps> = ({ contacts }) => {
  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setContacts(data);
  //   };
  //   fetchContacts();
  // }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Contacts;
