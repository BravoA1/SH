import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo_sockHub.png";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<div onClick={scrollToTop} className={`${styles.topPage}`}>
				<p>Retour en haut</p>
			</div>
			<footer>
				<div className={`${styles.logo}`}>
					<img src={logo} alt="Logo" />
				</div>
				<div className={`${styles.col}`}>
					<h1>A propos</h1>
					<ul>
						<li>Qui somme-nous ?</li>
						<li>Question fréquente</li>
						<li>Guide des tailles</li>
					</ul>
				</div>
				<div className={`${styles.col}`}>
					<h1>Mention Légale</h1>
					<ul>
						<li>Condition générales d'utilisation</li>
						<li>Condition générales de vente</li>
						<li>Condition générales de reprise</li>
						<li>Protection des données</li>
						<li>Cookies</li>
						<li>Mention légale</li>
					</ul>
				</div>
				<div className={`${styles.col}`}>
					<h1>Social</h1>
					<ul>
						<li>Email : </li>
						<li>Numéro : </li>
						<div className={`${styles.social}`}>
							<li>
								<img src="https://svgshare.com/i/5eA.svg" width="32" />
							</li>
							<li>
								<img src="https://svgshare.com/i/5eA.svg" width="32" />
							</li>
							<li>
								<img src="https://svgshare.com/i/5f_.svg" width="32" />
							</li>
						</div>
					</ul>
				</div>
			</footer>
		</>
	);
}
