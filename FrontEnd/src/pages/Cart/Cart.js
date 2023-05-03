import { useEffect, useState } from "react";
import DetailProduct from "./DetailProduct/DetailProduct";
import style from "./Cart.module.scss";

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);

  useEffect(() => {
    const response = [
      {
        id: 1,
        name: "chaussettes motif tropical",
        price: 20,
        model: "mi chaussettes",
        brand: "KINDY",
        count: 1,
        img: "https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg",
      },
      {
        id: 2,
        name: "chaussettes motif tropical",
        price: 20,
        model: "mi chaussettes",
        brand: "KINDY",
        count: 2,
        img: "https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg",
      },
      {
        id: 3,
        name: "chaussettes motif tropical",
        price: 20,
        model: "mi chaussettes",
        brand: "KINDY",
        count: 5,
        img: "https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg",
      },
      {
        id: 4,
        name: "chaussettes motif tropical",
        price: 20,
        model: "mi chaussettes",
        brand: "KINDY",
        count: 1,
        img: "https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg",
      },
      {
        id: 5,
        name: "chaussettes motif tropical",
        price: 20,
        model: "mi chaussettes",
        brand: "KINDY",
        count: 1,
        img: "https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg",
      },
      {
        id: 6,
        name: "chaussettes motif tropical",
        price: 20,
        model: "mi chaussettes",
        brand: "KINDY",
        count: 1,
        img: "https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg",
      },
    ];
    setCart(response);
  }, []);

  return (
    <div className={`d-flex justify-content-center ${style.container}`}>
      {!cart.length > 0 ? (
        <div>Loading...</div>
      ) : (
        cart.map((p) => (
          <div className={`${style.bar}`}>
            <DetailProduct
              key={p.id}
              product={p}
            />
          </div>
        ))
      )}
      <div className={`${style.payed}`}>
        <button className="btn btn-primary d-flex align-items-center justify-content-center">
          payed {totalPrice}€
        </button>
      </div>
    </div>
  );
}

export default Cart;
