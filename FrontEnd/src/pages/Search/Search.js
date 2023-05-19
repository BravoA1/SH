import { useParams } from "react-router-dom";
import { getArticles, getArticlesByGender } from "../../apis/articles";
import "./Search.scss";
import SearchItem from "./components/SearchItem";
import { useEffect, useState } from "react";
// import { getSize } from "../../apis/size";

export default function Search() {
  const [price, SetPrice] = useState(30);
  const [size, SetSize] = useState([]);
  const [articles, setArticles] = useState(null);
  const [displayArticles, setDisplayArticles] = useState(null);
  let { gender } = useParams();

  //Do when gender change so only when the page load
  useEffect(() => {
    //Ecrase un tableau
    function flattenArray(arr) {
      const flattened = [];

      arr.forEach((element) => {
        if (Array.isArray(element)) {
          flattened.push(...flattenArray(element));
        } else {
          flattened.push(element);
        }
      });

      return flattened;
    }

    //Send the array back with size added
    function GetSize(a) {
      // eslint-disable-next-line array-callback-return
      a.map((article) => {
        article.size = [article.size];
        // eslint-disable-next-line array-callback-return
        a.map((ar, i) => {
          if (ar === article) {
          } else {
            if (ar.id === article.id) {
              article.size.push(ar.size);
              article.size = flattenArray(article.size);
              a.splice(i, 1);
            }
          }
        });
      });

      return a;
    }
    //Get article with gender from param
    if (gender === "man") {
      getArticlesByGender("Man").then((a) => setArticles(GetSize(a)));
    } else if (gender === "woman") {
      getArticlesByGender("Woman").then((a) => setArticles(GetSize(a)));
    } else if (gender === "kid") {
      getArticlesByGender("Kid").then((a) => setArticles(GetSize(a)));
    } else {
      getArticles().then((a) => setArticles(a));
    }
  }, [gender]);

  useEffect(() => {
    //Initialise the Display Article
    setDisplayArticles(articles);
  }, [articles]);

  useEffect(() => {
    function CommonValue(size, article) {
      console.log(article);
      console.log(size);
      const hasCommonValue = size.every((value) =>
        article.includes(parseInt(value))
      );

      return hasCommonValue;
    }
    //Filter
    if (articles !== null) {
      let filterArticle = [];
      //Filter article with price
      filterArticle = articles.filter((a) => a.price < price);
      //Filter article with size
      if (size.length > 0) {
        filterArticle = filterArticle.filter((a) => {
          if (Array.isArray(a.size)) {
            return CommonValue(size, a.size);
          } else {
            if (a.size === size) {
              return true;
            }
          }
        });
      }
      setDisplayArticles(filterArticle);
    }
  }, [price, size, articles]);

  //Gestion du slider
  const handleChangeSlider = () => {
    const slider = document.getElementById("price");
    SetPrice(slider.value);
  };

  const handleChangeCheckboxSize = () => {
    const checkboxSize = document.getElementById("size");
    const form_Data = new FormData(checkboxSize);
    if (!form_Data.has("lang[]")) {
      let size = [];
      console.log("checkbox");
      // eslint-disable-next-line
      for (const [name, value] of form_Data) {
        size.push(value);
      }
      console.log(size);
      SetSize(size);
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
            <select>
              <option value="">Matière</option>
              <option value="coton">Coton</option>
              <option value="polya">Polyamide</option>
              <option value="laine">Laine</option>
              <option value="poly">Polyester</option>
            </select>
          </div>
          <div className="motif my10">
            <select>
              <option value="">Motif</option>
              <option value="raye">Rayée</option>
              <option value="bist">Bistrot</option>
              <option value="trop">Tropical</option>
              <option value="surf">Surfer</option>
            </select>
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
                <input type="checkbox" name="XS" value={6} />
                <label className="ml5">S</label>
                <input type="checkbox" name="S" value={5} />
                <label className="ml5">M</label>
                <input type="checkbox" name="M" value={4} />
                <label className="ml5">L</label>
                <input type="checkbox" name="L" value={3} />
                <label className="ml5">XL</label>
                <input type="checkbox" name="XL" value={2} />
                <label className="ml5">2XL</label>
                <input type="checkbox" name="2XL" value={1} />
              </div>
            </form>
          </div>
          <div className="couleur my10 d-flex flex-column">
            <label>Couleur</label>
            <div className="couleurContainer">
              <label>Gris</label>
              <input type="checkbox" />
              <label>Noir</label>
              <input type="checkbox" />
              <label>Bleu</label>
              <input type="checkbox" />
              <label>Beige</label>
              <input type="checkbox" />
              <label>Noir/Bleu</label>
              <input type="checkbox" />
              <label>Noir/Violet</label>
              <input type="checkbox" />
              <label>Blanc</label>
              <input type="checkbox" />
              <label>Marine</label>
              <input type="checkbox" />
              <label>Rose</label>
              <input type="checkbox" />
              <label>Noir/Blanc</label>
              <input type="checkbox" />
              <label>Bleu/Rouge</label>
              <input type="checkbox" />
              <label>Rouge</label>
              <input type="checkbox" />
              <label>Noir/Orange</label>
              <input type="checkbox" />
              <label>Noir/Gris</label>
              <input type="checkbox" />
              <label>Marron</label>
              <input type="checkbox" />
            </div>
          </div>
          <div className="marque my10 d-flex flex-column">
            <label>Couleur</label>
            <div className="marqueContainer">
              <label className="ml5">Marque1</label>
              <input type="checkbox" />
              <label className="ml5">Marque1</label>
              <input type="checkbox" />
              <label className="ml5">Marque1</label>
              <input type="checkbox" />
              <label className="ml5">Marque1</label>
              <input type="checkbox" />
              <label className="ml5">Marque1</label>
              <input type="checkbox" />
            </div>
          </div>
          <div className="promotion">
            <label>Promotion</label>
            <input type="checkbox"></input>
          </div>
        </div>
      </div>
      <div className={`d-flex flex-wrap`}>
        {displayArticles != null
          ? displayArticles.map((article, i) => (
              <SearchItem key={i} article={article} />
            ))
          : ""}
      </div>
    </div>
  );
}
