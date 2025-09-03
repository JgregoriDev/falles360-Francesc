import "@/App.css";
import { Header, Footer, Hero } from "@/components";
import { Home } from "@/pages/Home/Home.jsx";
import { PoliticaPrivadad } from "@/pages/PoliticaPrivadad/PoliticaPrivadad";
function App() {
  return (
    <>
      {/* 100% width */}
      <Header />
      <Hero />
      {/* 80% width */}
      <div className="container">
        <div className="container__left-site">&nbsp;</div>
        <div className="container-center-site">
          <Home />
          <PoliticaPrivadad />
        </div>
      </div>
      {/* 100% width */}
      <Footer />
    </>
  );
}

export default App;
