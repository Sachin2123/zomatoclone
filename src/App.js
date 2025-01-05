import React, { useState } from "react"; // This import is only needed once
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";

function App() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  return (
    <div className="App">
      <Header setIsHomeVisible={setIsHomeVisible} />
      <Home isHomeVisible={isHomeVisible} />
      <Footer />
    </div>
  );
}

export default App;
