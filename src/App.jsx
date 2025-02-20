import "./App.css";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
