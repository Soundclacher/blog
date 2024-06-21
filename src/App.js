import React from "react";
import { Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from  "./pages/Home/Home";
import About from   "./pages/About/About";
import FAQ from   "./pages/Faq/Faq";



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<FAQ/>}/>
      </Routes>
    </div>
  );
}

export default App;
