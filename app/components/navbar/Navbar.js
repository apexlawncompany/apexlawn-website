import React from 'react';
import styles from './Navbar.css';
//import logo from '../../../public/assets/apex-lawn.png';
import Image from 'next/image';
import { basePath } from '@/next.config';

const Navbar = () => {
  return (
    <>
      <nav className='container'>
        <Image
          src={`${basePath}/assets/apex-lawn.png`}
          width={75}
          height={75}
          alt='Apex Logo'
        />
        <ul>
          <li>Home</li>
          <li>Lawn Care</li>
          <li>Irrigation</li>
          <li>Land Scaping </li>
          <li>More products</li>
          <li>
            <button className='btn'>Contact</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
