import "@/App.css";
import { Header, Footer, Hero } from "@/components";
import { Home } from "@/pages/Home/Home.jsx";
import { PoliticaPrivadad } from "@/pages/PoliticaPrivadad/PoliticaPrivadad";
import { Link, Route, Switch } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
function App() {
  const [location] = useBrowserLocation();
  return (
    <>
      {/* 100% width */}
      <Header />
      {location === "/falles360-Francesc" ? <Hero /> : null}
      {/* 80% width */}
      <div className="container">
        <div className="container__left-site">&nbsp;</div>
        <div className="container-center-site">
          <Switch>
            <Route path="/falles360-Francesc" component={Home} />
            <Route
              path="/falles360-Francesc/politica-privacidad"
              component={PoliticaPrivadad}
            />
            <Route style={{ gridColumn: "1 / -1" }}>404: Página no encontrada!</Route>
          </Switch>
        </div>
      </div>
      {/* 100% width */}
      <Footer />
    </>
  );
}

export default App;
