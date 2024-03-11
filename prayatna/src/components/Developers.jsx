import React,{useEffect,useState} from "react";
import "./styles/developers.css";

function Developers(){
    
    
    document.addEventListener('mousemove',(e)=>{
    const mouseX= e.clientX;
    const mouseY=e.clientY;
    const rick = document.getElementById("rick");
    let rekt;
    if(!rick){return}
    else{    rekt = rick.getBoundingClientRect();  }
    
    const  anchorX = rekt.left+rekt.width /2;
    const anchorY = rekt.top +rekt.height /2;
    const eyes=document.querySelectorAll('.eye');
    const angleDeg = angle (mouseX, mouseY , anchorX , anchorY);
    eyes.forEach(eye=>{
    eye.style.transform = `rotate(${90 +angleDeg}deg)`;
    rick.style.filter=`hue-rotate(${angleDeg}deg)`;
    })
    })
    
    function angle( cx , cy, ex , ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180 / Math.PI;
    return deg;
    }
    


        return(
                <div className="Developers_Container">
                                <div className="animation_box">
                                <img id="rick" src="https://www.pngkit.com/png/full/4-49052_rickandmorty-rickhappy1500-rick-and-morty-rick-face.png" alt=""></img>
                                <div className="eyes">
                                    <img className="eye" style={{left: '-51px',top: '-44px'}} src="./eye.png" alt=""></img>
                                    <img className="eye" style={{ top: '-44px' , left: '17px'}} id="eye2" src="./eye.png" alt=""></img>  
                                 </div>
                                </div>

                                <div className="dev_box">
                                <h1>Developers</h1>

                                 <div className="dev_box1">
                                 
                                 <div className="first_dev">
                                <img src="./om.jpg" alt=""></img>
                                <strong>Om Anand (2027')</strong>
                                </div>
                                <div className="first_dev">
                                <img src="./Rushyendra.jpg" alt=""></img>
                                <strong>Rushyendra (2025')</strong>
                                </div>

                                </div>   
                                
                                <div className="dev_box1">
                                
                                <div className="first_dev">
                                <img src="./Siddharth.jpg" alt=""></img>
                                <strong>Siddharth (2026')</strong>
                                </div>
                                <div className="first_dev">
                                <img src="./Suraj.jpg" alt=""></img>
                                <strong>Suraj (2026')</strong>
                                </div>
                                
                                </div>
                                
                                
                                </div>
                                




                </div>



        );
        }


export default Developers;