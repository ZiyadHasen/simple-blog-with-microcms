import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.cr}>© {new Date().getFullYear()} Ziyad’s Blog. All Rights Reserved.</p>
    </footer>
  );
}
