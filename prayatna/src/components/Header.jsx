import React,{useState} from "react";
import "./styles/header.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Link }from "react-router-dom";


function Header(){

                const [clicked,setClicked]=useState(false);



                function handleClick(){
                                setClicked(!clicked);
                }

            return (
                       <div className="Navbar_Container">

                    <Link to="/" ><div className="Navbar_Logo">
                                        <img src="./prayatna_01.png" alt=""></img>
                                        <img src="./PrayatnaLogo.jpg" alt=""></img>
                                </div>
                    </Link>

                                <div className={clicked?'Navbar_Options active':'Navbar_Options'}>

                                        <Link to="/" style={{ textDecoration: 'none' }}><div onClick={()=>{setClicked(!clicked)}} className="Options Navbar_Home">
                                                    <p>Home</p>
                                                </div>
                                            </Link>

                                   <Link to="/Photos" onClick={()=>{setClicked(!clicked)}} style={{ textDecoration: 'none' }}><div className="Options Navbar_Photos">
                                                    <p>Photos</p>
                                    </div>
                                    </Link> 
                        <Link to="/Stats" onClick={()=>{setClicked(!clicked)}} style={{ textDecoration: 'none' }}>
                                    <div className="Options Navbar_Stats">
                                            <p>Stats</p>
                                    </div>
                                </Link>
                    <Link to="/Teams" onClick={()=>{setClicked(!clicked)}} style={{ textDecoration: 'none' }}><div className="Options Navbar_Teams">
                                            <p>Teams</p>
                                    </div>
                    </Link>
                                  <Link to="/Standings" onClick={()=>{setClicked(!clicked)}} style={{ textDecoration: 'none' }}>  <div className="Options Navbar_Standings">
                                            <p>Standings</p>
                                    </div>
                                    
                                    </Link>
                                <Link to="/Matches" onClick={()=>{setClicked(!clicked)}} style={{ textDecoration: 'none' }}>
                                    <div className="Options Navbar_Home_Matches">
                                            <p>Matches</p>
                                    </div>
                                </Link>

                                </div>

                        <div className="Navbar_SearchBar">
                            <input type="text" className="Header_Search" placeholder="Search Prayatna"/>
                            <SearchIcon className="Header_SearchIcon"/>
                        </div>
                        <div className="Navbar_Buttons">
                                       {clicked?<CloseIcon onClick={handleClick} className="Navbar_Close_Icon"/>:<MenuIcon onClick={handleClick} className="Navbar_Menu_Icon"/>}
                        </div>
                    

                        </div>
            );
}


export default Header;