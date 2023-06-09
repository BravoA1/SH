import { useEffect, useState } from "react";
import styles from "./SearchItem.module.scss";
import { getImage } from "../../../apis/image";

export default function SearchItem({ article }) {
	const [img, setImg] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		// getImage(article.img.urlImg).then((e) => setImg(e.url));
		setImg(getImage(article.img.urlImg));
		setTitle(article.name);
	}, []);

	return (
		<div className={` ${styles.Container}`}>
			<img src={img} alt="" />

			<div className={` ${styles.infoItem}`}>
				<h1>{title}</h1>
				<p>{article.brand}</p>
				<p>{article.pattern}</p>
			</div>
			<div className={`d-flex ${styles.infoItem2}`}>
				<p>{article.price}€</p>
			</div>
		</div>
	);
}
