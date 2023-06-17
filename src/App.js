import "./App.css";
import About from "./components/about/About";
import Benifits from "./components/benifits/Benifits";
import Benith from "./components/benithabout/Benith";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/services/Service";
import Topbar from "./components/topbar/Topbar";
import Why from "./components/why&OurClient/WhyOurClient";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Body />
      <About />
      <Benith />
      <Benifits />
      <Service />
      <Why />
      <Footer />
    </div>
  );
}
export default App;
