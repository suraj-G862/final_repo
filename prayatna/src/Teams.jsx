import React,{useState,useEffect} from "react";
import TeamsComp from "./TeamsComp";
import "./styles/teams.css";
import Papa from 'papaparse';
import Data from './PrayatnaTeams.csv';

function Teams(){
    const[ arr,setArr]=useState([0,0,0,0,0,0,0,0]);
    const [data, setData]=useState([]);

   
    function arraySetter(id){
        setArr((prevValue)=>{
             return   prevValue.map((item,index)=>{
                    if(index===id){
                        return item===0?1:0;   
                }
                else{
                    return item;
                }
                })
        });
        
    }
    
    useEffect(()=>{
           for(var i=0; i<arr.length;i++){
                if(arr[i]===1){
                    document.getElementsByClassName("Team_Members_Hidden")[i].style.display="flex";
            }
            else{
                document.getElementsByClassName("Team_Members_Hidden")[i].style.display="none";
            }
        }
            

    },[arr])


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(Data);
          const reader = response.body.getReader();
          const result = await reader.read();
          const decoder = new TextDecoder("utf-8");
          const csvData = decoder.decode(result.value);
          const parsedData = Papa.parse(csvData, { 
            header: true, 
            skipEmptyLines: true 
          }).data;
          setData(parsedData);
          
        };
        fetchData();
      }, []);
  




    
return (
        <div className="Teams_Container">
            <h1>Prayatna Teams & Members</h1>
            <TeamsComp
                ArrSetter={arraySetter}
                id={0}
                teamName="GLADIATORS"
                captainName="Prakar Sharma"
                playerNames={data.map((item)=>{return item.Gladiator;})}
                />
            <TeamsComp
                ArrSetter={arraySetter}
                id={1}
                teamName="SNOW LEOPARDS"
                captainName="Bharath Kumar"
                playerNames={data.map((item)=>{return item.SnowLeopards;})}
            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={2}
                teamName="TRIDENTS"
                captainName="Imdadulla Khan"
                playerNames={data.map((item)=>{return item.Tridents;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={3}
                teamName="FIRE BIRDS"
                captainName="Aditi Mahajan"
                playerNames={data.map((item)=>{return item.FireBirds;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={4}
                teamName="SILVER FALCONS"
                captainName="Ansh Gangwar"
                playerNames={data.map((item)=>{return item.SilverFalcons;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={5}
                teamName="BLACK ARCHERS"
                captainName="Basant Solanky"
                playerNames={data.map((item)=>{return item.BlackArchers;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={6}
                teamName="WAR LORDS"
                captainName="Ashmesh Dawande"
                playerNames={data.map((item)=>{return item.WarLords;})}

            />
            <TeamsComp
                  ArrSetter={arraySetter}
                id={7}
                teamName="DESSERT HAWKS"
                captainName="Sanat Tudu"
                playerNames={data.map((item)=>{return item.DessertHawks;})}

            />


        </div>

);

}


export default Teams;