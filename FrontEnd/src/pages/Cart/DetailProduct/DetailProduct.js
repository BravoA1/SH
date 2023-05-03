import { useState } from "react";
import style from "./DetailProduct.module.scss";

function DetailProduct({ product }) {
  const [count, setCount] = useState(product.count);

  function minus() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function plus() {
    setCount(count + 1);
  }

  return (
    <div className={`${style.bar} d-flex`}>
      <div
        className={`${style.items} d-flex justify-content-center align-items-center`}
      >
        <img src={product.img} alt="" />
        <div className={`d-flex align-items-center`}>
          <div className={`${style.item}`}>{product.name}</div>
          <div className={`${style.item}`}>{product.brand}</div>
          <div className={`${style.item}`}>{product.price}€</div>
        </div>
        <div
          className={`${style.item} ${style.counter} d-flex align-items-center`}
        >
          <i onClick={minus} className="las la-minus-circle" />
          <span className={style.count}>{count}</span>
          <i onClick={plus} className="las la-plus-circle" />
        </div>
        <div
          className={`${style.totalPrice} ${style.item} d-flex align-items-center`}
        >
          {product.price * count}€
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
