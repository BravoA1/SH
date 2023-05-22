import { useContext, useEffect, useState } from "react";
import style from "./DetailProduct.module.scss";
import {
  deleteArticleInCart,
  updateQuantityArticleInCart,
} from "../../../apis/cart";
import { AuthContext } from "../../../context/AuthContext";
import { getImage } from "../../../apis/image";

function DetailProduct({ product, setPrice, price, setCart, cart }) {
  const { user } = useContext(AuthContext);
  const [count, setCount] = useState(product.quantity);
  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(getImage(product.img.urlImg));
  }, []);

  async function minus() {
    var c = count;
    setCount(count - 1);
    c--;
    if (c == 0) {
      setCart(cart.filter((e) => e.id !== product.id));
      console.log(await deleteArticleInCart(product.id, user.user_id));
    } else {
      console.log(
        await updateQuantityArticleInCart(user.user_id, product.id, count - 1)
      );
    }
    setPrice(price - product.price);
  }

  async function plus() {
    if (count !== product.stock) {
      await updateQuantityArticleInCart(user.user_id, product.id, count + 1);
      setCount(count + 1);
      setPrice(price + product.price);
    }
  }

  return (
    <div className={`d-flex ${style.container}`}>
      <img src={img} alt="" />
      <div className={`${style.detailProduct} m10`}>
        <div>
          <h3>{product.name}</h3>
        </div>
        <div className={style.item}>stock : {product.stock}</div>
        <div className={style.item}>
          taille : {product.sizeName} {product.sizeSize}
        </div>
        <div className={style.item}>motif : {product.motif}</div>
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
          <h3>Prix total : {(product.price * count).toFixed(2)}€</h3>
        </div>
        <div>Prix unité : {product.price.toFixed(2)}€</div>
      </div>
    </div>
  );
}

export default DetailProduct;
