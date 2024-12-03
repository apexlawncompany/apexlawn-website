import About from './components/About/About';
import Main from './components/Main/Main';
import Navbar from './components/navbar/Navbar';
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
