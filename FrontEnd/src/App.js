import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import UpdateProvider from "./components/UpdateProvider/UpdateProvider";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <UpdateProvider>
          <Header />
          <div className="d-flex flex-column flex-fill">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
          <Footer />
        </UpdateProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
