import React from "react";
import "./styles/sportsCardInverted.css";

function SportsCardInverted(props){
        return(
            <div className="Sports_Card_Inverted">
            <img src={props.image} alt=""/>
            <div className="Sports_Name_Inverted">
                    <h1>{props.name}</h1>
            </div>
            
</div>

        );

}
export default SportsCardInverted;