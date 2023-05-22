import style from "./ProductInformation.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../apis/articles";
import { useContext, useEffect, useState } from "react";
import { addArticleToCart } from "../../apis/cart";
import { getImage } from "../../apis/image";
import Comment from "./Comment/Comment";

function ProductInformation() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [colorId, setColorId] = useState(null);
  const [sizeId, setSizeId] = useState(null);
  const [imgs, setImgs] = useState([]);
  const [imgPrincipal, setImgPrincipal] = useState("");
  const [stocks, setStocks] = useState("");

  useEffect(() => {
    getArticleById(id).then(async (p) => {
      setProduct(p);
      setColorId(p.color[0].id);
      setSizeId(p.size[0].id);
      p.img.map(async (e, i) => {
        const img = getImage(e.urlImg);
        if (i === 0) {
          setImgPrincipal(img);
        }
        setImgs((imgs) => [...imgs, img]);
        setStocks(
          p.stock.filter(
            (e) => e.sizeId === p.size[0].id && e.colorId === p.color[0].id
          )[0].quantity
        );
      });
    });
    console.log(stocks);
  }, []);

  const validationSchema = yup.object({
    size: yup.string(),
    // quantity: yup.string().required(),
  });

  const initialValues = {
    // quantity: "",
  };

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm({ initialValues, resolver: yupResolver(validationSchema) });

  const submit = handleSubmit((values) => {
    if (user != null && colorId != null) {
      addArticleToCart(user.user_id, product.id, values.size, colorId);
    }
  });

  function chooseColor(e) {
    resetColorChoose();
    const id = e.target.id;
    setColorId(id);
    document
      .getElementById(id)
      .parentElement.classList.add(style.active);
    setStocks(
      product.stock.filter((e) => e.sizeId == sizeId && e.colorId == id)[0]
        .quantity
    );
  }

  function resetColorChoose() {
    product.color.map((e) => {
      document
        .getElementById(e.id)
        .parentElement.classList.remove(style.active);
    });
  }

  function chooseImg(e) {
    setImgPrincipal(imgs[e.target.name]);
  }

  return (
    <>
      {product != null ? (
        <div className={`${style.container} d-flex justify-content-center`}>
          <div className="d-flex flex-column align-items-center m10">
            {imgs.length &&
              imgs.map((e, i) => (
                <div key={i}>
                  <img
                    name={i}
                    onClick={chooseImg}
                    src={e}
                    className={`${style.imgAvatar} m10`}
                  />
                  <div
                    className={`${style.straight} ${style.shorizontal} m10`}
                  />
                </div>
              ))}
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="m10">
              <img
                className={`${style.imgCentral}`}
                src={imgPrincipal}
                alt=""
              />
            </div>
            <div className={`${style.straight} ${style.svertical} m30`} />
            <form onSubmit={submit}>
              <div className="m10">
                <p>{product.name}</p>
                <p>Color choice:</p>
                <div className="d-flex">
                  {product.color.map((color, i) => (
                    <div
                      className={`${style.color} ${
                        i === 0 ? style.active : ""
                      } d-flex mr5`}
                      key={color.id}
                    >
                      <div
                        id={color.id}
                        onClick={chooseColor}
                        className={`${
                          color.name == "noir"
                            ? style.black
                            : color.name == "gris"
                            ? style.gray
                            : color.name == "bleu"
                            ? style.blue
                            : color.name == "beige"
                            ? style.beige
                            : color.name == "noir/bleu"
                            ? style.black
                            : color.name == "noir/violet"
                            ? style.black
                            : color.name == "blanc"
                            ? style.white
                            : color.name == "marine"
                            ? style.navy
                            : color.name == "rose"
                            ? style.pink
                            : color.name == "noir/blanc"
                            ? style.black
                            : color.name == "bleu/rouge"
                            ? style.blue
                            : color.name == "rouge"
                            ? style.red
                            : color.name == "noir/orange"
                            ? style.black
                            : color.name == "noir/gris"
                            ? style.black
                            : color.name == "marron"
                            ? style.brown
                            : ""
                        }`}
                      ></div>
                      <div
                        id={color.id}
                        onClick={chooseColor}
                        className={`${
                          color.name == "noir"
                            ? style.black
                            : color.name == "gris"
                            ? style.gray
                            : color.name == "bleu"
                            ? style.blue
                            : color.name == "beige"
                            ? style.beige
                            : color.name == "noir/bleu"
                            ? style.blue
                            : color.name == "noir/violet"
                            ? style.purple
                            : color.name == "blanc"
                            ? style.white
                            : color.name == "marine"
                            ? style.navy
                            : color.name == "rose"
                            ? style.pink
                            : color.name == "noir/blanc"
                            ? style.white
                            : color.name == "bleu/rouge"
                            ? style.red
                            : color.name == "rouge"
                            ? style.red
                            : color.name == "noir/orange"
                            ? style.orange
                            : color.name == "noir/gris"
                            ? style.gray
                            : color.name == "marron"
                            ? style.brown
                            : ""
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="mt10">
                  <select {...register("size")}>
                    {product.size.map((size) => (
                      <option value={size.id} key={size.id}>
                        {size.name} {size.size}
                      </option>
                    ))}
                  </select>
                </div>
                <p>
                  Stock :{" "}
                  <span className={stocks < 5 ? style.danger : ""}>
                    {stocks}
                  </span>
                </p>
                <p>{product.brand}</p>
                <p>{product.price} €</p>
                {/* <p>
                  <label htmlFor="quantity" />
                  <input
                    type="text"
                    placeholder="quantity"
                    name="quantity"
                    {...register("quantity")}
                  />
                </p> */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
      <Comment/>
    </>
  );
}

export default ProductInformation;
