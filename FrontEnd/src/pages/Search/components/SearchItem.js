import { useEffect, useState } from "react";
import styles from "./SearchItem.module.scss";
import { getImage } from "../../../apis/image";

export default function SearchItem({ article }) {
  const [img, setImg] = useState("");
  const [title, setTitle]  = useState('');

  useEffect(() => {
    getImage(article.img.urlImg).then((e) => setImg(e.url));

    if(article.name.length > 9){
      let name = "";
      for(let i = 0 ; i < 6 ; i++){
        name = name + article.name[i]
      } 
      setTitle(name + "...");
    }else{
      setTitle(article.name);
    }
  },[]);

  return (
    <div className={`d-flex flex-column ${styles.Container}`}>
      <div className={`d-flex ${styles.ContainerName}`}>
        <div className={`d-flex justify-content-flex-start ${styles.Name}`}>
          <h2>{title}</h2>
        </div>
        <div className={`${styles.ImgContainer}`}>
          <div className={`${styles.Img}`}></div>
        </div>
      </div>
      <div
        className={`${styles.Product} d-flex align-items-center flex-column`}
      >
        <img src={img} alt="" />
        <div className="d-flex flex-column justify-content-flex-start flex-fill">
          <p>{article.brand}</p>
          <p>{article.pattern}</p>
          <p>{article.price}€</p>
        </div>
      </div>
    </div>
  );
}
