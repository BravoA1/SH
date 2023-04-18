import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="d-flex flex-column flex-fill">
        <h1>APP</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
