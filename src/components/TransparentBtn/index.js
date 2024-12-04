import styles from "./btn.module.css";

function TransparentBtn({ children, className, ...otherProps }) {
  return (
    <button
      className={`${styles.transparentBtn} ${className || ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default TransparentBtn;
