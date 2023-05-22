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
				<div className={`${styles.button}d-flex justify-content-star`}>
					<Link to="/">
						{" "}
						<img src={logo} alt="Logo" />
					</Link>
				</div>
			</div>
			<div className={`${styles.desktopHeader} d-flex `}>
				<ul className="d-flex flex-fill justify-content-start">
					<Link to="/search/man">
						<div className={`${styles.button}`}>
							<span>Homme</span>
						</div>
					</Link>
					<Link to="/search/woman">
						<div className={`${styles.button}`}>
							<span>Femme</span>
						</div>
					</Link>
					<Link to="/search/kid">
						<div className={`${styles.button}`}>
							<span>Enfant</span>
						</div>
					</Link>
				</ul>
				<ul className="flex-fill d-flex justify-content-end">
					{user ? (
						<>
							<Link to="/profile">
								<div className={`${styles.button}`}>
									<span>Profil</span>
								</div>
							</Link>
							<Link to="/" onClick={() => signout()}>
								<div className={`${styles.button}`}>
									<span>Déconnexion</span>
								</div>
							</Link>
						</>
					) : (
						<Link to="/login">
							<div className={`${styles.button}`}>
								<span>Connexion</span>
							</div>
						</Link>
					)}
					<Link to="/cart">
						<div className={`${styles.button} las la-shopping-cart la-1x mr10`}>
							{" "}
						</div>
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
