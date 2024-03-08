import React from "react";
import "./styles/header.css";
import SearchIcon from '@mui/icons-material/Search';
// import {Link }from "react-router-dom";


function Header(){
            return (
                       <div className="Navbar_Container">
                <a href="./App.jsx">
                        <div className="Navbar_Logo">
                                 <img src=".\assets\PrayatnaLogo.jpg" alt=""></img>
                        </div>
                </a>

                                <div className="Navbar_Options">

                                    <a href="./App.jsx">
                                        <div className="Options Navbar_Home">
                                                <p>Home</p>
                                        </div>
                                    </a>
                                    <a href="./Teams.jsx">
                                        <div className="Options Navbar_Home">
                                                <p>Teams</p>
                                        </div>
                                    </a>
                                    <a href="./App.jsx">
                                        <div className="Options Navbar_Home">
                                                <p>Photos</p>
                                        </div>
                                    </a>
                                    <a href="./App.jsx">
                                        <div className="Options Navbar_Home">
                                                <p>Stats</p>
                                        </div>
                                    </a>
                                    <a href="./App.jsx">
                                        <div className="Options Navbar_Home">
                                                <p>Standings</p>
                                        </div>
                                    </a>
                                    <a href="./App.jsx">
                                        <div className="Options Navbar_Home">
                                                <p>Matches</p>
                                        </div>
                                    </a>

                                </div>

                        <div className="Navbar_SearchBar">
                            <input type="text" className="Header_Search" placeholder="Search Prayatna"/>
                            <SearchIcon className="Header_SearchIcon"/>
                        </div>
                    

                        </div>
            );
}


export default Header;