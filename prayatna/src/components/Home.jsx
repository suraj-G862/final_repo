import React,{useEffect} from "react";
import "./styles/home.css";
import SportsCard from "./SportsCard";
import VersusCard from "./VersusCard";
import SportsCardInverted from "./SportsCardInverted";

function Home(){
  

        return (

            <div className="LandingPage_Container">

               

                <div className="Poster_Image">
                <div className="Background_Image">
                <img src="./Group 143726071.jpg" alt=""></img>  
                </div> 

                    <div className="UpcomingMatches">
                           <div>
                            <h2>Upcoming Matches</h2>
                           </div>
                           <VersusCard
                            image="https://wallpapercave.com/wp/wp6860265.jpg"
                            timing="Volleyball - 03 June 2023"
                            teams="Gladiator VS Firebird"
                           />
                           <VersusCard
                            image="https://wallpapercave.com/wp/wp3978060.jpg"
                            timing="Volleyball - 03 June 2023"
                            teams="Gladiator VS Firebird"
                           />

                    </div>
                </div>


                <div className="Sports_Played">
                    <h1>Sports played in prayatna</h1>
                    <div className="Sports_Images_Cards1">

                        <SportsCard
                         name="CRICKET"
                         image="https://wallpapercave.com/wp/wp3978060.jpg"
                        />
                        <SportsCardInverted
                            name="FOOTBALL"
                            image="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://everythingbarca.com/wp-content/uploads/getty-images/2018/08/1192549776.jpeg"
                        />
                        <SportsCard
                            name="VOLLEYBALL"
                            image="https://images2.alphacoders.com/575/575646.jpg"
                        />
                        <SportsCardInverted
                            name="KABADDI"
                            image="https://globalsportmatters.com/wp-content/uploads/2018/09/Kabaddi.jpg"
                        />

                    </div>
                    
                    <div className="Sports_Images_Cards">

                        <SportsCard
                            name="KHO-KHO"
                            image="https://www.kreedon.com/wp-content/uploads/2019/04/s1-kho-kho.jpg"
                        />
                        <SportsCardInverted
                            name="ATHELETICS"
                            image="https://i.pinimg.com/originals/c2/93/86/c293862160fb012c7d8a3e657e05a1d4.jpg"
                        />
                        <SportsCard
                            name="TABLE TENNIS"
                            image="https://upload.wikimedia.org/wikipedia/commons/b/be/Table_tennis_Rio_2007.jpg"
                        />
                        <SportsCardInverted
                            name="CHESS"
                            image="https://th.bing.com/th/id/R.aaecf4e656816d523e158c7020b64030?rik=LSAkxuS4XN1JWQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd9%2fOpening_chess_position_from_black_side.jpg&ehk=8rDi2v%2bqS9sR7MebfKwairOua%2bjBz1dbCY%2fMOa52cEI%3d&risl=1&pid=ImgRaw&r=0"
                        />

                    </div>
                </div>

                    







            </div>

        );
}

export default Home;