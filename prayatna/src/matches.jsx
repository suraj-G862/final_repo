import React, { useState } from 'react';
import "./styles/matches.css";
import volleyballimage from "./assets/volleyball.jpeg"
import athleticsimage from "./assets/athletics.jpeg"
import chessimage from "./assets/chess.jpeg"
import cricketimage from "./assets/cricket.jpeg"
import footballimage from "./assets/football.jpeg"
import kabaddiimage from "./assets/kabaddi.jpeg"
import khokhoimage from "./assets/khokho.jpeg"
import ttimage from "./assets/tt.jpg"

const Sport_Image= ({sport}) =>{
  if (sport == "Volleyball") return <img src={volleyballimage} alt="Error loading image"></img>
  else if (sport == "Table Tennis") return <img src={ttimage} alt="Error loading image"></img>
  else if (sport == "Football") return <img src={footballimage} alt="Error loading image"></img>
  else if (sport == "Cricket") return <img src={cricketimage} alt="Error loading image"></img>
  else if (sport == "Athletics") return <img src={athleticsimage} alt="Error loading image"></img>
  else if (sport == "Chess") return <img src={chessimage} alt="Error loading image"></img>
  else if (sport == "Kabaddi") return <img src={kabaddiimage} alt="Error loading image"></img>
  else if (sport == "Kho Kho") return <img src={khokhoimage} alt="Error loading image"></img>
}

const UpcomingMatches = ({data}) => {
    const [startIndex, setStartIndex] = useState(0);
  
    const handleNext = () => {
      setStartIndex(prevIndex => Math.min(prevIndex + 3, data.length - 3));
    };
  
    const handlePrev = () => {
      setStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
    };

  return (
    <div className="slideshow">
      <div className="container-wrapper">
        {data.slice(startIndex, startIndex + 3).map(container => (
          <div key={container.id} className="container">
            <div id="image"><Sport_Image sport={container.sport}/></div>
            <div id="vs">{container.team1} VS {container.team2}</div>
            <div id="sport">{container.sport}</div>
            <div>{container.type}</div>
            <div id="time"><i className="material-icons">access_time</i>{container.time}</div>
            <div id="venue"><i className="material-icons">location_on</i>{container.venue}</div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev} disabled={startIndex === 0}>
        <i className="material-icons">west</i>
        </button>
        <button onClick={handleNext} disabled={startIndex >= data.length - 3}>
        <i className="material-icons">east</i>
        </button>
      </div>
    </div>

  );
}

const PastMatches = ({data}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 3, data.length - 3));
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
  };

return (
  <div className="slideshow">
    <div className="container-wrapper">
      {data.slice(startIndex, startIndex + 3).map(container => (
        <div key={container.id} className="container">
          <div id="image"><Sport_Image sport={container.sport}/></div>
          <div id="vs"><h id="winningteam">{container.winningteam}</h> VS <h id="losingteam">{container.losingteam}</h></div>
          <div id="sport">{container.sport}</div>
          <div>{container.type}</div>
        </div>
      ))}
    </div>
    <div className="controls">
      <button onClick={handlePrev} disabled={startIndex === 0}>
      <i className="material-icons">west</i>
      </button>
      <button onClick={handleNext} disabled={startIndex >= data.length - 3}>
      <i className="material-icons">east</i>
      </button>
    </div>
  </div>

);
}

function Matches1() {
  const upcomingmatchdata = [
    { sport: 'Volleyball', team1:'Snow Leopards', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Final"},
    { sport: 'Table Tennis', team1:'Gladiators', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Semi-Final"},
    { sport: 'Football', team1:'Snow Leopards', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "League Match"},
    { sport: 'Kabaddi', team1:'Tridents', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Final"},
    { sport: 'Kho Kho', team1:'Snow Leopards', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Final"},
    { sport: 'Athletics', team1:'Snow Leopards', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Final"},
    { sport: 'Cricket', team1:'Tridents', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Final"},
    { sport: 'Volleyball', team1:'Snow Leopards', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Final"},
    { sport: 'Chess', team1:'Snow Leopards', team2:'Tridents', time:'04 April 2024, 5PM', venue:'Kanhar', type: "Final"}
  ];

    const pastmatchdata = [
      { sport: 'Volleyball', winningteam: 'Snow Leopards', losingteam: 'Tridents', type: "Final"},
      { sport: 'Cricket', winningteam: 'Snow Leopards', losingteam: 'Tridents', type: "Semi-Final"},
      { sport: 'Table Tennis', winningteam: 'Snow Leopards', losingteam: 'Tridents', type: "League Match"},
      { sport: 'Kabaddi', winningteam: 'Snow Leopards', losingteam: 'Tridents', type: "Final"},
      { sport: 'Football', winningteam: 'Snow Leopards', losingteam: 'Tridents', type: "Final"}
    ];

    return (

      <div className="main">
        <div className="upcomingmatches">
          <h1>Upcoming Matches</h1>
          <UpcomingMatches data={upcomingmatchdata} />
        </div>
        <div className="pastmatches">
          <h1>Past Matches</h1>
          <PastMatches data={pastmatchdata} />
        </div>
      </div>
    );
  }

export default Matches1;


<img src={volleyballimage} alt="Error loading image"></img>