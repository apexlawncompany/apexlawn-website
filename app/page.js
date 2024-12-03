import About from './components/About/About';
import Main from './components/Main/Main';
import { basePath } from '@/next.config';

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${basePath}/assets/mainsection.jpeg)`,
          backgroundPosition: 'center',
        }}
      >
        <Main />
        <About />
      </div>
    </>
  );
}
