import Product from "../Product/Product";
import style from "./Homepage.module.scss";
import { useState, useEffect } from "react";

function Homepage() {
  const [productListMan, setProductListMan] = useState([]);
  const [productListWoman, setProductListWoman] = useState([]);
  const [productListKid, setProductListKid] = useState([]);

  useEffect(() => {
    const responseMan = [
      {
        id: 18,
        name : "Lot de 2 paires d'invisibles en coton spéciales basket",
        price: 8.9,
        model: "ksport",
        brand: "Kindy",
        img: "http://localhost:3000/image/lot-de-2-paires-d-invisibles-en-coton-speciales-basket-noir.jpg",
      },
      {
        id: 3,
        name : "mi-chaussettes-en-coton-liam-made-in-France",
        price: 12.9,
        model: "rayée",
        brand: "Achille",
        img: "http://localhost:3000/image/mi-chaussettes-en-coton-liam-made-in-france.jpg",
      },
      {
        id: 11,
        name : "Mi-chaussettes en coton motif Moustache MADE IN FRANCE",
        price: 12.9,
        model: "moustache",
        brand: "Achille",
        img: "http://localhost:3000/image/mi-chaussettes-en-coton-motif-moustache-made-in-france.jpg",
      },
    ];
    setProductListMan(responseMan);
    const responseWoman = [
      {
        id: 33,
        name : "socquettes-en-coton-motifs-feuillage-made-in-France",
        price: 8.9,
        model: "Socquette",
        brand: "Kindy",
        img: "http://localhost:3000/image/socquettes-en-coton-motifs-feuillage-made-in-france-rose.jpg",
      },
      {
        id: 34,
        name : "mi-chaussettes en coton fleurs made-in-France",
        price: 12.9,
        model: "floral",
        brand: "Achille",
        img: "http://localhost:3000/image/mi-chaussettes-en-coton-fleurs-made-in-france-marine.jpg",
      },
      {
        id: 28,
        name : "invisibles-sport-en-coton-et-bouclette",
        price: 12.9,
        model: "Chaussette de sport",
        brand: "Kindy",
        img: "http://localhost:3000/image/invisibles-sport-en-coton-et-bouclette-rose.jpg",
      },
    ];
    setProductListWoman(responseWoman);
    const responseKid = [
      {
        id: 39,
        name : "mi-bas-ski-folk",
        price: 16.99,
        model: "Ski folk",
        brand: "Kindy",
        img: "http://localhost:3000/image/mi-bas-ski-folk-bleu.jpg",
      },
      {
        id: 46,
        name : "mi-chaussettes-imprimees-skate",
        price: 7.9,
        model: "skate",
        brand: "Kindy",
        img: "http://localhost:3000/image/mi-chaussettes-imprimees-skate.jpg",
      },
      {
        id: 38,
        name : "mi-bas-ski-bebe-pingouin",
        price: 15.9,
        model: "pingouin",
        brand: "Thyo",
        img: "http://localhost:3000/image/mi-bas-ski-bebe-pingouin-rougebleu.jpg",
      },
    ];
    setProductListKid(responseKid);

    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth <= "400") {
        const tabMan = responseMan.filter((e) => e.id === 1);
        setProductListMan(tabMan);
        const tabWoman = responseWoman.filter((e) => e.id === 1);
        setProductListWoman(tabWoman);
        const tabKid = responseKid.filter((e) => e.id === 1);
        setProductListKid(tabKid);
      } else if (e.target.innerWidth <= "600") {
        const tabMan = responseMan.filter((e) => e.id !== 3);
        setProductListMan(tabMan);
        const tabWoman = responseWoman.filter((e) => e.id !== 3);
        setProductListWoman(tabWoman);
        const tabKid = responseKid.filter((e) => e.id !== 3);
        setProductListKid(tabKid);
      } else {
        setProductListMan(responseMan);
        setProductListWoman(responseWoman);
        setProductListKid(responseKid);
      }
    });
  }, []);

  return (
    <>
      <div className="flex-fill d-flex align-items-center justify-content-center">
        <div className={`${style.container}`}>
          <div className={`${style.bar} d-flex`}>
            <div
              className={`${style.title} d-flex justify-content-center align-items-center`}
            >
              Homme
            </div>
            <div
              className={`${style.items} d-flex justify-content-center align-items-center`}
            >
              {!productListMan.length ? (
                <div>Loading ...</div>
              ) : (
                productListMan.map((p) => (
                  <div
                    key={p.id}
                    className={`${style.item} d-flex justify-content-center align-items-center`}
                  >
                    <Product product={p} />
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={`${style.bar} d-flex`}>
            <div
              className={`${style.title} d-flex justify-content-center align-items-center`}
            >
              Femme
            </div>
            <div
              className={`${style.items} d-flex justify-content-center align-items-center`}
            >
              {!productListWoman.length ? (
                <div>Loading ...</div>
              ) : (
                productListWoman.map((p) => (
                  <div
                    key={p.id}
                    className={`${style.item} d-flex justify-content-center align-items-center`}
                  >
                    <Product product={p} />
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={`${style.bar} d-flex`}>
            <div
              className={`${style.title} d-flex justify-content-center align-items-center`}
            >
              Enfant
            </div>
            <div
              className={`${style.items} d-flex justify-content-center align-items-center`}
            >
              {!productListKid.length ? (
                <div>Loading ...</div>
              ) : (
                productListKid.map((p) => (
                  <div
                    key={p.id}
                    className={`${style.item} d-flex justify-content-center align-items-center`}
                  >
                    <Product product={p} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
