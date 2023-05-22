import { useParams } from "react-router-dom";
import { getArticles, getArticlesByGender } from "../../apis/articles";
import "./Search.scss";
import SearchItem from "./components/SearchItem";
import { useEffect, useState } from "react";
import { getSize } from "../../apis/size";
import { getColor } from "../../apis/color";
import { getMaterial } from "../../apis/material";
// import { getSize } from "../../apis/size";

export default function Search() {
	const [price, SetPrice] = useState(30);
	const [size, SetSize] = useState([]);
	const [brand, SetBrand] = useState([]);
	const [color, SetColor] = useState([]);
	const [pattern, SetPattern] = useState("");
	const [material, SetMaterial] = useState("");
	const [articles, setArticles] = useState(null);
	const [displayArticles, setDisplayArticles] = useState(null);
	let { gender } = useParams();
	//On render initialise all the parameter
	useEffect(() => {
		const selectPattern = document.getElementById("selectPattern");
		selectPattern.selectedIndex = 0;
		const selectMaterial = document.getElementById("selectMaterial");
		selectMaterial.selectedIndex = 0;
		SetPrice(30);
		SetSize([]);
		SetBrand([]);
		SetColor([]);
		SetPattern("");
		SetMaterial("");
	}, []);

	useEffect(() => {
		//Initialise the Display Article
		setDisplayArticles(articles);
		console.log(articles);
	}, [articles]);

	//Do when gender change
	useEffect(() => {
		//Send the array back with all the parameter needed
		function GetParameter(a) {
			let ArticleBuffer = a;
			// eslint-disable-next-line array-callback-return
			a.map(async (article, i) => {
				const Size = await getSize(article.id);
				const Color = await getColor(article.id);
				const Material = await getMaterial(article.id);
				ArticleBuffer[i].size = Size;
				ArticleBuffer[i].color = Color;
				ArticleBuffer[i].material = Material;
			});

			return ArticleBuffer;
		}
		//Get article with gender from param
		if (gender === "man") {
			getArticlesByGender("Man").then((a) => setArticles(GetParameter(a)));
		} else if (gender === "woman") {
			getArticlesByGender("Woman").then((a) => setArticles(GetParameter(a)));
		} else if (gender === "kid") {
			getArticlesByGender("Kid").then((a) => setArticles(GetParameter(a)));
		} else {
			getArticles().then((a) => setArticles(GetParameter(a)));
		}
	}, [gender]);

	//Filter useEffect
	useEffect(() => {
		//Common value for int array
		function CommonValueInt(parameter, article) {
			const hasCommonValue = parameter.every((value) =>
				article.includes(parseInt(value))
			);
			return hasCommonValue;
		}
		//Contain value for string Array
		function ContainValueString(parameter, article) {
			const hasCommonValue = parameter.some((value) => article.includes(value));

			return hasCommonValue;
		}
		//Filter
		if (articles !== null) {
			let filterArticle = [];
			//Filter article with price
			filterArticle = articles.filter((a) => a.price < price);
			//Filter article with size
			if (size.length > 0) {
				// eslint-disable-next-line array-callback-return
				filterArticle = filterArticle.filter((a) => {
					if (Array.isArray(a.size)) {
						return CommonValueInt(size, a.size);
					} else {
						if (a.size === size) {
							return true;
						}
					}
				});
			}
			//Filter article with brand
			if (brand.length > 0) {
				// eslint-disable-next-line array-callback-return
				filterArticle = filterArticle.filter((a) => {
					if (Array.isArray(brand)) {
						return ContainValueString(brand, [a.brand]);
					} else {
						if (a.brand === brand) {
							return true;
						}
					}
				});
			}
			//Filter article with pattern
			if (pattern !== "") {
				// eslint-disable-next-line array-callback-return
				filterArticle = filterArticle.filter((a) => {
					if (pattern === a.pattern) {
						return true;
					}
				});
			}
			//Filter article with color
			if (color.length > 0) {
				// eslint-disable-next-line array-callback-return
				filterArticle = filterArticle.filter((a) => {
					if (Array.isArray(a.color)) {
						return CommonValueInt(color, a.color);
					} else {
						if (a.color === color) {
							return true;
						}
					}
				});
			}
			//Filer article with material
			if (material !== "") {
				// eslint-disable-next-line array-callback-return
				filterArticle = filterArticle.filter((a) => {
					if (Array.isArray(a.material)) {
						const materialArticleOrigin = a.material;
						let materialArticle = [];
						materialArticleOrigin.map((m) => materialArticle.push(m.material));
						console.log(
							material,
							" : ",
							materialArticle,
							" = ",
							material.includes(parseInt(materialArticle))
						);
						return material.includes(parseInt(materialArticle));
					} else {
						if (a.material === material) {
							return true;
						}
					}
				});
				console.log(filterArticle);
			}
			setDisplayArticles(filterArticle);
		}
	}, [price, size, brand, color, pattern, material, articles]);

	//Gestion du slider
	const handleChangeSlider = () => {
		const slider = document.getElementById("price");
		SetPrice(slider.value);
	};

	//Gestion des checkbox Size
	const handleChangeCheckboxSize = () => {
		const checkboxSize = document.getElementById("size");
		const form_Data = new FormData(checkboxSize);
		//Verifie si les checkbox existe
		if (!form_Data.has("lang[]")) {
			let size = [];
			// eslint-disable-next-line
			for (const [name, value] of form_Data) {
				size.push(value);
			}
			SetSize(size);
		}
	};

	//Gestion des checkbox Color
	const handleChangeCheckboxColor = () => {
		const checkboxBrand = document.getElementById("color");
		const form_Data = new FormData(checkboxBrand);
		//Verifie si les checkbox existe
		if (!form_Data.has("lang[]")) {
			let color = [];
			// eslint-disable-next-line
			for (const [name, value] of form_Data) {
				color.push(value);
			}
			SetColor(color);
		}
	};

	//Gestion des checkbox Brand
	const handleChangeCheckboxBrand = () => {
		const checkboxBrand = document.getElementById("brand");
		const form_Data = new FormData(checkboxBrand);
		//Verifie si les checkbox existe
		if (!form_Data.has("lang[]")) {
			let brand = [];
			// eslint-disable-next-line
			for (const [name, value] of form_Data) {
				brand.push(name);
			}
			SetBrand(brand);
		}
	};

	//Gestion du select Pattern
	const handleChangeSelectPattern = () => {
		const selectPattern = document.getElementById("selectPattern");
		const value = selectPattern.value;
		if (value === "reset") {
			SetPattern("");
			selectPattern.selectedIndex = 0;
		} else {
			SetPattern(value);
		}
	};

	//Gestion du select Matterial
	const handleChangeSelectMaterial = () => {
		const selectMaterial = document.getElementById("selectMaterial");
		const value = selectMaterial.value;
		if (value === "reset") {
			SetMaterial("");
			selectMaterial.selectedIndex = 0;
		} else {
			SetMaterial(value);
		}
	};

	return (
		<div className="d-flex flex-fill">
			<div className={`d-flex flex-column FilterParent`}>
				<a href="/" className={`btn-primary`}>
					Filtre
				</a>
				<div className={`d-flex flex-fill flex-column Filter`} id="filter">
					<div className="price my10">
						<label className={`PriceLabel`}>{price}</label>
						<input
							type="range"
							id="price"
							name="prix"
							value={price}
							min="0"
							max="30"
							step={0.5}
							onChange={() => handleChangeSlider()}
						/>
						<label>Prix</label>
					</div>
					<div className="matiere my10">
						<form id="material" onChange={() => handleChangeSelectMaterial()}>
							<select id="selectMaterial">
								<option value="" disabled>
									Matière
								</option>
								<option value={1}>Coton</option>
								<option value={2}>Polyamide</option>
								<option value={3}>Viscose de bambou</option>
								<option value={4}>Acrylique</option>
								<option value={5}>Laine</option>
								<option value={6}>Elasthanne</option>
								<option value={7}>Polyester</option>
								<option value={8}>Polypropylène</option>
								<option value={"reset"}>Reset</option>
							</select>
						</form>
					</div>
					<div className="motif my10">
						<form id="pattern" onChange={() => handleChangeSelectPattern()}>
							<select id="selectPattern">
								<option value="" disabled>
									Motif
								</option>
								<option value="rayée">Rayée</option>
								<option value="bistrot">Bistrot</option>
								<option value="tropical">Tropical</option>
								<option value="surfer">Surfer</option>
								<option value="café crème">Café crème</option>
								<option value="moustache">Moustache</option>
								<option value="nordic">Nordic</option>
								<option value="fantaisie">Fantaisie</option>
								<option value="ancre">Ancre</option>
								<option value="drapeau et baguette">Drapeau et baguette</option>
								<option value="village">Village</option>
								<option value="coq">Coq</option>
								<option value="ksport">Ksport</option>
								<option value="aucun">Aucun</option>
								<option value="cœur">Cœur</option>
								<option value="floral">Floral</option>
								<option value="marin">Marin</option>
								<option value="mum">Mum</option>
								<option value="pingouin">Pingouin</option>
								<option value="ski">Ski</option>
								<option value="moto">Moto</option>
								<option value="reset">Reset</option>
							</select>
						</form>
					</div>
					<div className="taille my10 d-flex flex-column">
						<form id="size" onChange={() => handleChangeCheckboxSize()}>
							<label>Taille</label>
							<div className="tailleContainer">
								<label className="ml5">Bébé</label>
								<input type="checkbox" name="Baby" value={9} />
								<label className="ml5">Enfant</label>
								<input type="checkbox" name="Kid" value={8} />
								<label className="ml5">Ado</label>
								<input type="checkbox" name="Teenager" value={7} />
								<label className="ml5">XS</label>
								<input type="checkbox" name="XS" value={1} />
								<label className="ml5">S</label>
								<input type="checkbox" name="S" value={2} />
								<label className="ml5">M</label>
								<input type="checkbox" name="M" value={3} />
								<label className="ml5">L</label>
								<input type="checkbox" name="L" value={4} />
								<label className="ml5">XL</label>
								<input type="checkbox" name="XL" value={5} />
								<label className="ml5">2XL</label>
								<input type="checkbox" name="2XL" value={6} />
							</div>
						</form>
					</div>
					<div className="couleur my10 d-flex flex-column">
						<form id="color" onChange={() => handleChangeCheckboxColor()}>
							<label>Couleur</label>
							<div className="couleurContainer">
								<label>Gris</label>
								<input type="checkbox" name="gris" value={1} />
								<label>Noir</label>
								<input type="checkbox" name="noir" value={2} />
								<label>Bleu</label>
								<input type="checkbox" name="bleu" value={3} />
								<label>Beige</label>
								<input type="checkbox" name="beige" value={4} />
								<label>Noir/Bleu</label>
								<input type="checkbox" name="noir/bleu" value={5} />
								<label>Noir/Violet</label>
								<input type="checkbox" name="noir/violet" value={6} />
								<label>Blanc</label>
								<input type="checkbox" name="blanc" value={7} />
								<label>Marine</label>
								<input type="checkbox" name="marine" value={8} />
								<label>Rose</label>
								<input type="checkbox" name="rose" value={9} />
								<label>Noir/Blanc</label>
								<input type="checkbox" name="noir/blanc" value={10} />
								<label>Bleu/Rouge</label>
								<input type="checkbox" name="bleu/rouge" value={11} />
								<label>Rouge</label>
								<input type="checkbox" name="rouge" value={12} />
								<label>Noir/Orange</label>
								<input type="checkbox" name="noir/orange" value={13} />
								<label>Noir/Gris</label>
								<input type="checkbox" name="noir/gris" value={14} />
								<label>Marron</label>
								<input type="checkbox" name="marron" value={15} />
							</div>
						</form>
					</div>
					<div className="marque my10 d-flex flex-column">
						<form id="brand" onChange={() => handleChangeCheckboxBrand()}>
							<label>Marque</label>
							<div className="marqueContainer">
								<label className="ml5">Achille</label>
								<input type="checkbox" name="Achille" value={1} />
								<label className="ml5">Thyo</label>
								<input type="checkbox" name="Thyo" value={2} />
								<label className="ml5">Kindy</label>
								<input type="checkbox" name="Kindy" value={3} />
								<label className="ml5">Le coq sportif</label>
								<input type="checkbox" name="Le coq sportif" value={4} />
								<label className="ml5">Burlington</label>
								<input type="checkbox" name="Burlington" value={5} />
								<label className="ml5">LBO</label>
								<input type="checkbox" name="LBO" value={6} />
								<label className="ml5">Levi's</label>
								<input type="checkbox" name="Levi's" value={7} />
								<label className="ml5">Archiduchesse</label>
								<input type="checkbox" name="Archiduchesse" value={8} />
								<label className="ml5">Adidas</label>
								<input type="checkbox" name="Adidas" value={9} />
								<label className="ml5">Lafayette</label>
								<input type="checkbox" name="Lafayette" value={10} />
								<label className="ml5">Nike</label>
								<input type="checkbox" name="Nike" value={11} />
							</div>
						</form>
					</div>
					<div className="promotion">
						<label>Promotion</label>
						<input type="checkbox"></input>
					</div>
				</div>
			</div>
			<div className={`d-flex flex-wrap containerSearch`}>
				{displayArticles != null
					? displayArticles.map((article, i) => (
							<SearchItem key={i} article={article} />
					  ))
					: ""}
			</div>
		</div>
	);
}
