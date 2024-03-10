import React from "react";
import "./styles/header.css";
import SearchIcon from '@mui/icons-material/Search';
import {Link }from "react-router-dom";


function Header(){
            return (
                       <div className="Navbar_Container">

                    <Link to="/" ><div className="Navbar_Logo">
                                        <img src="./PrayatnaLogo.jpg" alt=""></img>
                                </div>
                    </Link>

                                <div className="Navbar_Options">

                                        <Link to="/" style={{ textDecoration: 'none' }}><div className="Options Navbar_Home">
                                                    <p>Home</p>
                                                </div>
                                            </Link>
                                            <Link to="/Photos" style={{ textDecoration: 'none' }}>
                                    <div className="Options Navbar_Photos">
                                                    <p>Photos</p>
                                    </div>
                                    </Link>
                                    <Link to="/Stats" style={{textDecoration:'none'}}>
                                        <div className="Options Navbar_Stats">
                                            <p>Stats</p>
                                    </div>
                                    </Link>
                                    
                    <Link to="/Teams" style={{ textDecoration: 'none' }}><div className="Options Navbar_Teams">
                                            <p>Teams</p>
                                    </div>
                    </Link>

                    <Link to="/Standings" style={{ textDecoration: 'none' }}>
                                    <div className="Options Navbar_Standings">
                                            <p>Standings</p>
                                    </div>
                        </Link>
                        <Link to="/Matches" style={{ textDecoration: 'none' }}>
                                    <div className="Options Navbar_Home_Matches">
                                            <p>Matches</p>
                                    </div>
                                    
                                </Link>

                                </div>

                        <div className="Navbar_SearchBar">
                            <input type="text" className="Header_Search" placeholder="Search Prayatna"/>
                            <SearchIcon className="Header_SearchIcon"/>
                        </div>
                    

                        </div>
            );
}


export default Header;