import Image from 'next/image';
import About from './components/About/About';
import Main from './components/Main/Main';
import Navbar from './components/navbar/Navbar';
import Programs from './components/Programs/Programs';
import Program from './components/Programs/Programs';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className='image-container'>
        <Navbar />
        <Main />
        <About />
      </div>
    </>
  );
}
