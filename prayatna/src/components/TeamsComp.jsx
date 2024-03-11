import React from "react";
import "./styles/TeamsComp.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function TeamsComp(props){


        function  handleClick (event){
                                 event.preventDefault();
                                 props.ArrSetter(props.id);
                                        }
                
        
        
        



return (        <div>
        <div className="TeamsComp_Container">
                        <div className="Team_Logo">logo</div>
                        <div className="TeamName">{props.teamName}</div>
                        <div className="CaptainName">Captain: {props.captainName}</div>
                        <div className="Team_Members" onClick={handleClick}>
                                <span><strong>Members</strong></span>
                                <button><ArrowDropDownIcon/></button>
                        </div>
            </div>
            <div className="Team_Members_Hidden" >
            
                <ul>
                {props.playerNames.map((item,index)=>{return index<10?<li>{item}</li>:null})}           
                </ul>
                <ul>
                {props.playerNames.map((item,index)=>{return index>=10&&index<20?<li>{item}</li>:null})}
                </ul>
                <ul>
                {props.playerNames.map((item,index)=>{return index>=20&&index<30?<li>{item}</li>:null})}
                </ul>
                <ul>
                {props.playerNames.map((item,index)=>{return index>=30&&index<40?<li>{item}</li>:null})}
                </ul>
                <ul>
                {props.playerNames.map((item,index)=>{return index>=40&&index<50?<li>{item}</li>:null})}
                </ul>
            </div>



                        </div>
            
);


}


export default TeamsComp;