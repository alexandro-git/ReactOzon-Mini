
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import React from 'react'
import Header from "./components/Header";
import Cart from "./components/Cart";


function App() {

  
  return (
    <div className="App p-5 bg-white  rounded-3xl">
   <Header/>
      <Routes>
        <Route path="/" element={<Home  />} />
        {/* <Route path="/404" element={<NotFound />} /> */}
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </div>
  );
}

export default App;
