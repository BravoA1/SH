import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div className={`flex-fill`}>
        <h1>SockHub</h1>
      </div>
      <ul className={`${styles.desktopHeader}`}></ul>
    </header>
  );
}
