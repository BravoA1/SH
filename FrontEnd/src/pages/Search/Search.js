import "./Search.scss";
import SearchItem from "./components/SearchItem";
import { useEffect, useState } from "react";

export default function Search() {
  const [price, SetPrice] = useState(10);

  const handleChange = () => {
    const slider = document.getElementById("price");
    SetPrice(slider.value);
  };
  return (
    <div className="d-flex flex-fill">
      <div className={`d-flex flex-column FilterParent`}>
        <a className={`btn-primary`}>Filtre</a>
        <div className={`d-flex flex-fill flex-column Filter`} id="filter">
          <div className="price my10">
            <label>{price}</label>
            <input
              type="range"
              id="price"
              name="prix"
              value={price}
              min="0"
              max="100"
              onChange={() => handleChange()}
            />
            <label>Prix</label>
          </div>
          <div className="matiere my10">
            <select>
              <option value="">Matière</option>
              <option value="coton">Coton</option>
              <option value="laine">Laine</option>
              <option value="soie">Soie</option>
              <option value="poly">Polyester</option>
            </select>
          </div>
          <div className="motif my10">
            <select>
              <option value="">Motif</option>
              <option value="coton">Croix</option>
              <option value="laine">Moche</option>
              <option value="soie">Rond</option>
              <option value="poly">Carré</option>
            </select>
          </div>
          <div className="taille my10 d-flex flex-column">
            <label>Taille</label>
            <div className="tailleContainer">
              <label>XXL</label>
              <input type="checkbox" />
              <label className="ml5">XL</label>
              <input type="checkbox" />
              <label className="ml5">L</label>
              <input type="checkbox" />
              <label className="ml5">M</label>
              <input type="checkbox" />
              <label className="ml5">S</label>
              <input type="checkbox" />
              <label className="ml5">XS</label>
              <input type="checkbox" />
            </div>
          </div>
          <div className="couleur my10 d-flex flex-column">
            <label>Couleur</label>
            <div className="couleurContainer">
              <label>XXL</label>
              <input type="checkbox" />
              <label className="ml5">Rouge</label>
              <input type="checkbox" />
              <label className="ml5">Bleu</label>
              <input type="checkbox" />
              <label className="ml5">Vert</label>
              <input type="checkbox" />
              <label className="ml5">Orange</label>
              <input type="checkbox" />
              <label className="ml5">Violet</label>
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
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>
    </div>
  );
}
