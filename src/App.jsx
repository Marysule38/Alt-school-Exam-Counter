import "./App.css";
import { useState } from "react";
import { Routes, Route, NavLink} from "react-router-dom";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";
import TestError from "./components/TestError";
import ReducerCounter from "./components/ReducerCounter";
import imgSrc from  './assets/ham.png';
import Menu from "./components/Menu";

function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <main className="App">
      <nav>
      <NavLink to="/">Counter</NavLink>
      <NavLink to="/useReducerCounter">useReducerCounter</NavLink>
      <NavLink to="/testErrorBoundary">Test Error boundary</NavLink>
      <figure 
         className="hamburger-menu"
         onClick={() => setShowMenu(prev => !prev)}
         >
        <img src={imgSrc} alt="hamburger menu img"/>
      </figure>
      </nav>
      <Menu  
         setShowMenu={setShowMenu}
         showMenu={showMenu}/>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/useReducerCounter" element={<ReducerCounter />} />
        <Route path="/testErrorBoundary" element={<TestError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
export default App;

