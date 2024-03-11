import React from "react";
import "./styles/sportsCard.css";


function SportsCard(props){

    return (

        <div className="Sports_Card">
                    <div className="Sports_Name">
                            <h1>{props.name}</h1>
                    </div>
                    <img src={props.image} alt=""/>
        </div>





    )


}


export default SportsCard;