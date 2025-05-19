'use client';
import styles from './btn.module.css';
import { useRouter } from 'next/navigation';

function TransparentBtn({ children, className, ...otherProps }) {
  const router = useRouter();

  const handleButtonClick = (event) => {
    const tag = event.target.tagName.toLowerCase();
    if (['a', 'img', 'svg', 'path'].includes(tag)) {
      return;
    }
    router.push('/appointments');
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`${styles.transparentBtn} ${className || ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default TransparentBtn;
