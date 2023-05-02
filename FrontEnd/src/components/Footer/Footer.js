import styles from "./Footer.module.scss";

export default function Footer() {


  return (
    <footer className={`${styles.footer}`}>
      <p className="d-flex justify-content-center">Copyright © 2023 JWT Inc.</p>

    </footer>
  );
}
