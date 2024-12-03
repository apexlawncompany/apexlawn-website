'use client';

import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { basePath } from '@/next.config';
import './About.css';
const images = [
  '/assets/coursal-img-1.jpeg',
  '/assets/coursal-img-2.jpeg',
  '/assets/coursal-img-3.jpeg',
  '/assets/coursal-img-4.jpeg',
];

const About = () => {
  return (
    <div className='about'>
      <div className='about-carousel'>
        <Carousel
          className='main-carousel'
          autoPlay={true}
          interval={1100}
          showThumbs={false}
          autoFocus={true}
          infiniteLoop={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={`${basePath}${image}`}
                alt='img-1'
                width={0}
                height={0}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
