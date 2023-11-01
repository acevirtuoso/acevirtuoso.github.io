import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contactinfo from "./components/Contactinfo/Contactinfo";
import Footer from "./components/Footer/Skills";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
// import "./index.css"

// // import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./components/About/About";
// import Contactinfo from "./components/Contactinfo/Contactinfo";
// import Experience from "./components/Experience/Experience";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

// export default function App() {
//   return (

//   );
// }
// ReactDOM.render(<App/>, document.querySelector("#root"));

const App = () => {
  return (
    <>
      {/* importing all the compontants in the order we want them to appear */}
      {/* <BrowserRouter> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Footer />
      <Contactinfo />

      {/* <BrowserRouter>
    TESTING
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contactinfo />} />
          <Route path="Experience" element={<Experience />} />
          <Route path= "Footer" element= {<Footer/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}

      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
