import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="d-flex flex-column flex-fill">
        <Suspense>
          <Outlet/>
        </Suspense>
      </div>
      <button
        onClick={scrollToTop}
        className={`btn btn-primary las la-chevron-up la-3x ${styles.buttonTop}`}
      ></button>
      <Footer />
    </div>
  );
}

export default App;
