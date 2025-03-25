'use client';
import styles from './btn.module.css';
import { useRouter } from 'next/navigation';

function TransparentBtn({ children, className, ...otherProps }) {
  const router = useRouter();

  const handleButtonClick = (event) => {
    const isInsideLink = event.currentTarget.closest('a');
    if (isInsideLink) {
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
