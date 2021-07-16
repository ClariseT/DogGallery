import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cachorros from "./components/Cachorros";
import Doggerman from "./components/Doggerman";
import Ojitos from "./components/Ojitos";
import Pug from "./components/Pug";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <Router>
      <div className="container ; text-center mb-3 mt-3; text-white">
        <h1> Firulais Gallery </h1>
      </div>
      <Route path="/Cachorros" component={Cachorros} />
      <Route path="/Doggerman" component={Doggerman} />
      <Route path="/Ojitos" component={Ojitos} />
      <Route path="/Pug" component={Pug} />

      <Navegacion />

    </Router>
  );
}

export default App;
