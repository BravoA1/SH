import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className="d-flex flex-fill">
      <div className={`d-flex flex-column ${styles.Filter}`}>
        <div>
          <input type="checkbox" />
          <label>Filtre 1</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Filtre 2</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Filtre 3</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Filtre 4</label>
        </div>
      </div>
      <div className={`d-flex flex-wrap`}>
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
              src={`https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg`} alt=""
            />
            <div className="d-flex flex-column justify-content-flex-start flex-fill">
              <p>Marque</p>
              <p>Couleur</p>
              <p>Prix</p>
            </div>
          </div>
        </div>
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
              src={`https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg`} alt=""
            />
            <div className="d-flex flex-column justify-content-flex-start flex-fill">
              <p>Marque</p>
              <p>Couleur</p>
              <p>Prix</p>
            </div>
          </div>
        </div>
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
              src={`https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg`} alt=""
            />
            <div className="d-flex flex-column justify-content-flex-start flex-fill">
              <p>Marque</p>
              <p>Couleur</p>
              <p>Prix</p>
            </div>
          </div>
        </div>
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
              src={`https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg`} alt=""
            />
            <div className="d-flex flex-column justify-content-flex-start flex-fill">
              <p>Marque</p>
              <p>Couleur</p>
              <p>Prix</p>
            </div>
          </div>
        </div>
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
              src={`https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg`} alt=""
            />
            <div className="d-flex flex-column justify-content-flex-start flex-fill">
              <p>Marque</p>
              <p>Couleur</p>
              <p>Prix</p>
            </div>
          </div>
        </div>
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
              src={`https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg`} alt=""
            />
            <div className="d-flex flex-column justify-content-flex-start flex-fill">
              <p>Marque</p>
              <p>Couleur</p>
              <p>Prix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
