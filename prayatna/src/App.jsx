import React from "react";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Teams from "./Teams";
import Standings from "./standings"
import Photos from "./photos"
import Stats from "./Stats"
import Footer from "./Footer";



function App(){
    return (
        <>
          <Header/>
          <Home/>
          <Teams/>
          <Standings/>
          <Photos/>
          <Stats/>
          <Footer/>
        </>
        
    );
}

export default App;
