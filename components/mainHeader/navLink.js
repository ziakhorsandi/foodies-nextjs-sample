'use client';
import Link from 'next/link';
import classes from './navLink.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
