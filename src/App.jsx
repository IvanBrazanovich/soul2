import { useContext, useRef, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Vender from "./components/Vender";
import SoulContext from "./context/SoulProvider";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Productos />
      <Nosotros />
      <Vender />
    </div>
  );
}

export default App;
