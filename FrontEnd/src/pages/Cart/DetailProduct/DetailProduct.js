import { useState } from "react";
import style from "./DetailProduct.module.scss";

function DetailProduct({ product, setPrice, price, setCart, cart }) {
  const [count, setCount] = useState(product.count);
  function minus() {
    var c = count;
    setCount(count - 1);
    c--;
    if (c !== 0) {
      setPrice(price - product.price);
    } else {
      setCart(cart.filter((e) => e.id !== product.id));
    }
  }

  function plus() {
    setCount(count + 1);
    setPrice(price + product.price);
  }

  return (
    <div className={`d-flex ${style.container}`}>
      <img src={product.img} alt="" />
      <div className={`${style.detailProduct} m10`}>
        <div>
          <h3>{product.name}</h3>
        </div>
        <div className={style.item}>stock : {product.stock}</div>
        <div className={style.item}>taille : {product.size}</div>
        <div className={style.item}>
          {product.color !== ""
            ? "couleur"
            : product.motif !== ""
            ? "motif"
            : ""}{" "}
          :{" "}
          {product.color !== ""
            ? product.color
            : product.motif !== ""
            ? product.motif
            : ""}
        </div>
        <div className={`${style.priceMobile} m10`}>
          <div>
            <h3>Prix total : {product.price * count}€</h3>
          </div>
          <div>Prix unité : {product.price}€</div>
        </div>
        <div className={`${style.counter} m10 d-flex align-items-center`}>
          <i onClick={minus} className="las la-minus-circle" />
          <span className={style.count}>{count}</span>
          <i onClick={plus} className="las la-plus-circle" />
        </div>
      </div>
      <div className={`${style.price} m10`}>
        <div>
          <h3>Prix total : {product.price * count}€</h3>
        </div>
        <div>Prix unité : {product.price}€</div>
      </div>
    </div>
  );
}

export default DetailProduct;
