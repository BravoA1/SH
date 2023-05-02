import Product from "../Product/Product";
import style from "./Homepage.module.scss";
import { useState, useEffect } from "react";

function Homepage() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const response = [
      { id: 1, price: 20, model: "mi chaussettes", brand: "KINDY" },
      { id: 2, price: 20, model: "mi chaussettes", brand: "KINDY" },
      { id: 3, price: 20, model: "mi chaussettes", brand: "KINDY" },
    ];
    setProductList(response);

    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth <= "400") {
        const tab = response.filter((e) => e.id === 1);
        setProductList(tab);
      } else if (e.target.innerWidth <= "600") {
        const tab = response.filter((e) => e.id !== 3);
        setProductList(tab);
      } else {
        setProductList(response);
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
              {!productList.length ? (
                <div>Loading ...</div>
              ) : (
                productList.map((p) => (
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
              {!productList.length ? (
                <div>Loading ...</div>
              ) : (
                productList.map((p) => (
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
              {!productList.length ? (
                <div>Loading ...</div>
              ) : (
                productList.map((p) => (
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
