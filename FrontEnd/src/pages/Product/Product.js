import style from "./Product.module.scss";
import { Link } from "react-router-dom";

function Product({ product }) {
  //   return (
  //     <Link to={`/productInformation/${product.id}`}>
  //       <div
  //         className={`${style.container} d-flex justify-content-center align-items-center`}
  //       >
  //         <img
  //           src={product.img}
  //           alt=""
  //         />
  //         <div className={`${style.information} ml10`}>
  //           <p>{product.price}€</p>
  //           <p>{product.model}</p>
  //           <p>{product.brand}</p>
  //         </div>
  //       </div>
  //     </Link>
  //   );
  return (
    <Link
      to={`/productInformation/${product.id}`}
      className={`${style.linkHome}`}
    >
      <div
        className={`${style.container} d-flex justify-content-center align-items-center`}
      >
        <img
          src="https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg"
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
