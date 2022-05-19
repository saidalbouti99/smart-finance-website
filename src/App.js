import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import FeaturesDetails1 from "./components/FeaturesDetails1";
import FeaturesDetails2 from "./components/FeaturesDetails2";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Features />
      <FeaturesDetails1 />
      <FeaturesDetails2 />
    </div>
  );
}

export default App;
