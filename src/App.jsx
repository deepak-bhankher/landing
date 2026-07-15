import Home from "./component/Home";
import About from "./component/About";
import FeaturesSection from "./component/Featurs";
import Client from "./component/Client";
import AppDownload from "./component/AppDownload";
import Footer from "./component/footer";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <FeaturesSection />
      <Client />
      <AppDownload/>
      <Footer/>
    </>
  );
};

export default App;