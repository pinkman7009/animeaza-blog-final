import React from 'react';
import NavbarStyles from '../../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.container}>
        <h1 className={NavbarStyles.navTitle}>ANIMEAZA</h1>
        <ul className={NavbarStyles.navLinks}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blogs'>Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
