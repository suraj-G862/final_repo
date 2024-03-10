import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Teams from "./Teams";
import Footer from "./Footer";
import Developers from './Developers';
import Stats from "./Stats";
import Matches from "./matches"
import Photos from "./photos"
import Standings from "./standings"




function App(){ 

    return (
        <Router>
            <div>

            <Header/>
            <Routes>

            
            <Route path="/" element={<><Home/><Developers/></>}>
            </Route>
            <Route path="/Teams" element={<><Teams/></>}>
            </Route>
            <Route path="/Standings" element={<Standings/>}>
            </Route>
            <Route path="/Matches" element={<Matches/>}>
            </Route>
            <Route path="/Photos" element={<Photos/>}>
            </Route>
            <Route path="/Stats" element={<Stats/>}>
            </Route>
                
            </Routes>
                
            </div>
            <Footer/>
            </Router>
        
    );
}

export default App;