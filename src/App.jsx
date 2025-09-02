import "@/App.css";
// import Footer from './components/Footer/Footer';
import { Header, Footer, Hero, Coins, FAQList, Sponsors } from "@/components";

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
          <Coins />
          <Sponsors />
          <FAQList />
        </div>
      </div>
      {/* 100% width */}
      <Footer />
    </>
  );
}

export default App;
