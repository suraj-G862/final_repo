import React from 'react';
import "./styles/versusCard.css";

function VersusCard(props){
    return (
            <div className="VersusCard_Container">
            <img className="Versus_Image" src={props.image} alt=""/>
                    <div className="Versus_Details">
                            <small>{props.timing}</small><br/>
                            <strong>{props.teams}</strong>
                    </div>
            </div>

    );
}

export default VersusCard;