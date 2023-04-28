import styles from "./Footer.module.scss";
import backgroundSvg from "../../assets/images/footerBackground.png";

export default function Footer() {


  return (
    <footer className={`${styles.footer}`}>
      <p className="d-flex justify-content-center">Copyright © 2023 JWT Inc.</p>

    </footer>
  );
}
