import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_sockHub.png";
import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user, signout } = useContext(AuthContext);
  console.log(user);
  const [showMenu, setShowMenu] = useState(false);
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  function handleClick() {
    if (count === 0) {
      setShowMenu(true);
      addCount();
    } else {
      setShowMenu(false);
      setCount(0);
    }
  }

  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div className={``}>
        <div className="d-flex justify-content-start">
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className={`${styles.desktopHeader} d-flex `}>
        <ul className="d-flex flex-fill justify-content-start">
          <Link to="search/man">
            <button className="btn btn-primary">
              <span>Homme</span>
            </button>
          </Link>
          <Link to="/search/woman">
            <button className="btn btn-primary">
              <span>Femme</span>
            </button>
          </Link>
          <Link to="/search/kid">
            <button className="btn btn-primary">
              <span>Enfant</span>
            </button>
          </Link>
        </ul>
        <ul className="flex-fill d-flex justify-content-end">
          {user ? (
            <>
              <Link to="/profile">
                <button className="btn btn-primary">
                  <span>Profil</span>
                </button>
              </Link>
              <Link to="/" onClick={() => signout()}>
                <button className="btn btn-primary">
                  <span>Déconnexion</span>
                </button>
              </Link>
            </>
          ) : (
            <Link to="/signin">
              <button className="btn btn-primary">
                <span>Connexion</span>
              </button>
            </Link>
          )}
          <Link to="/search">
            <button className="btn btn-primary las la-search la-1x mr10"></button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-primary las la-shopping-cart la-1x mr10"></button>
          </Link>
        </ul>
      </div>

      <i onClick={handleClick} className={`fas fa-bars mr10`}></i>
      {showMenu && (
        <>
          <MobileMenu />
        </>
      )}
    </header>
  );
}
