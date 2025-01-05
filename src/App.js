import React, { useState } from "react"; // This import is only needed once
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  return (
    <div className="App">
      <Header setIsHomeVisible={setIsHomeVisible} />
      <Home isHomeVisible={isHomeVisible} />
      <Footer />
    </div>
  );
}

export default App;
