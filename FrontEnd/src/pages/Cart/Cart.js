import { useContext, useEffect, useState } from "react";
import DetailProduct from "./DetailProduct/DetailProduct";
import style from "./Cart.module.scss";
import { getCart } from "../../apis/cart";
import { AuthContext } from "../../context/AuthContext";

function Cart() {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);

  useEffect(() => {
    if (user != null) {
      getCart(user.user_id).then((e) => {
        setCart(e);
        setTotalPrice(e);
      });
    }
  }, [setPrice]);

  function setTotalPrice(tab) {
    var price = 0;
    tab.forEach((e) => {
      price = price + e.price * e.quantity;
    });
    setPrice(price);
  }
  return (
    <div className={`${style.container}`}>
      <div className={`d-flex ${style.container2}`}>
        <div className={`${style.cart}`}>
          <h2>Votre panier</h2>
          {!cart.length > 0 ? (
            <div>Votre panier est vide</div>
          ) : (
            cart.map((p) => (
              <div key={p.id} className={`${style.bar}`}>
                <DetailProduct
                  key={p.id}
                  product={p}
                  setPrice={setPrice}
                  price={totalPrice}
                  setCart={setCart}
                  cart={cart}
                />
              </div>
            ))
          )}
        </div>
        <div className={`${style.commandPayed}`}>
          <h2>Prix de votre commande</h2>
          <div className={`${style.detailCommandPayed} d-flex`}>
            <div>
              Nombre d'article : <strong>{cart.length}</strong>
            </div>
            <div className="ml20">
              Prix total : <strong>{totalPrice.toFixed(2)}€</strong>
            </div>
          </div>
          <div className="d-flex justify-content-center mt20 mb20">
            <button className={`btn btn-primary-reverse ${style.btnCommand}`}>
              passer la commande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
