import styles from "./SearchItem.module.scss"

export default function SearchItem() {
  return (
    <div className={`d-flex flex-column ${styles.Container}`}>
      <div className={`d-flex ${styles.ContainerName}`}>
        <div className={`d-flex justify-content-flex-start ${styles.Name}`}>
          <h2>Nom</h2>
        </div>
        <div className={`${styles.ImgContainer}`}>
          <div className={`${styles.Img}`}></div>
        </div>
      </div>
      <div
        className={`${styles.Product} d-flex align-items-center flex-column`}
      >
        <img
          src={`https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg`}
          alt=""
        />
        <div className="d-flex flex-column justify-content-flex-start flex-fill">
          <p>Marque</p>
          <p>Couleur</p>
          <p>Prix</p>
        </div>
      </div>
    </div>
  );
}
