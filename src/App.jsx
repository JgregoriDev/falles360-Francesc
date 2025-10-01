import "@/App.css";
import { useEffect } from "react";
import { Header, Footer, Hero } from "@/components";
import { Home } from "@/pages/Home/Home.jsx";
import  Blog  from "@/pages/Blog/Blog.jsx";
import  E404  from "@/pages/E404/E404.jsx";
import { PoliticaPrivadad } from "@/pages/PoliticaPrivadad/PoliticaPrivadad";
import { Link, Route, Switch, useLocation } from "wouter";
import Article from "@/pages/Article/Article";
function App() {
    const [location, navigate] = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  // const [location] = useBrowserLocation();
  return (
    <>
      {/* 100% width */}
      <Header />
      {location === "/falles360-Francesc" || location === "/falles360-Francesc/" ? <Hero /> : null}
      {/* 80% width */}
      <div className="container">
        <div className="container__left-site">&nbsp;</div>
        <main className="container-center-site">
          <Switch>
            <Route path="/falles360-Francesc" component={Home} />
            <Route
              path="/falles360-Francesc/blog"
              component={Blog}
            />
            <Route
              path="/falles360-Francesc/blog/noticia/:id"
              component={Article}
            />
            <Route
              path="/falles360-Francesc/politica-privacidad"
              component={PoliticaPrivadad}
            />
            <Route style={{ gridColumn: "1 / -1" }} component={E404} />
          </Switch>
        </main>
      </div>
      {/* 100% width */}
      <Footer />
    </>
  );
}

export default App;
