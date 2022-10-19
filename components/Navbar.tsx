import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { FC } from 'react';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <h3 className={styles.logo}>DM</h3>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => {
          return (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : null}>
                {title}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
