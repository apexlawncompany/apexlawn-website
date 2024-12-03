'use client';
import React from 'react';
import styles from './Navbar.css';
//import logo from '../../../public/assets/apex-lawn.png';
import Image from 'next/image';
import { basePath } from '@/next.config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className='container'>
        <Image
          src={`${basePath}/assets/apex-lawn.png`}
          width={65}
          height={65}
          alt='Apex Logo'
        />
        <ul>
          <li>
            <Link href='/' className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/lawncare'
              className={pathname === '/lawncare' ? 'active' : ''}
            >
              Lawn Care
            </Link>
          </li>
          <li>
            <Link
              href='/irrigation'
              className={pathname === '/irrigation' ? 'active' : ''}
            >
              Irrigation
            </Link>
          </li>
          <li>
            <Link
              href='/land-scaping'
              className={pathname === '/land-scaping' ? 'active' : ''}
            >
              Land Scaping
            </Link>
          </li>
          <li>
            <Link
              href='/more-products'
              className={pathname === '/more-products' ? 'active' : ''}
            >
              More Products
            </Link>
          </li>
          <li>
            <button className='btn'>Contact</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
