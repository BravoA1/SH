import style from "./Product.module.scss";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/productInformation/${product.id}`}>
      <div
        className={`${style.container} d-flex justify-content-center align-items-center`}
      >
        <img
          src={product.img}
          alt=""
        />
        <div className={`${style.information} ml10`}>
          <p>{product.price}€</p>
          <p>{product.model}</p>
          <p>{product.brand}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
