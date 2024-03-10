import React from "react";
import "./styles/stats.css"

// Dummy data for demonstration
const rankings = [
  // Add rankings for other games
  {
    game: "Badminton Rankings",
    teams: [
      { name: "Gladiator", score: 10 },
      { name: "Fire Birds", score: 15 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 12 },
      { name: "Warlords", score: 20 },
      { name: "Black Archers", score: 18 },
      { name: "Snow Leopards", score: 14 },
      { name: "Tridents", score: 9 },
      // Add more teams...
    ],
  },
  // Add rankings for other games here...
  {
    game: "Cricket Rankings",
    teams: [
      { name: "Gladiator", score: 10 },
      { name: "Fire Birds", score: 15 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 12 },
      { name: "Warlords", score: 20 },
      { name: "Black Archers", score: 18 },
      { name: "Snow Leopards", score: 14 },
      { name: "Tridents", score: 9 },
      // Add more teams...
    ],
  },
  {
    game: "Chess Rankings",
    teams: [
      { name: "Gladiator", score: 10 },
      { name: "Fire Birds", score: 15 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 12 },
      { name: "Warlords", score: 20 },
      { name: "Black Archers", score: 18 },
      { name: "Snow Leopards", score: 14 },
      { name: "Tridents", score: 9 },
      // Add more teams...
    ],
  },
  {
    game: "Volleyball Rankings",
    teams: [
      { name: "Gladiator", score: 10 },
      { name: "Fire Birds", score: 15 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 12 },
      { name: "Warlords", score: 20 },
      { name: "Black Archers", score: 18 },
      { name: "Snow Leopards", score: 14 },
      { name: "Tridents", score: 9 },
      // Add more teams...
    ],
  },
  {
    game: "Football Rankings",
    teams: [
      { name: "Gladiator", score: 10 },
      { name: "Fire Birds", score: 15 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 12 },
      { name: "Warlords", score: 20 },
      { name: "Black Archers", score: 18 },
      { name: "Snow Leopards", score: 14 },
      { name: "Tridents", score: 9 },
      // Add more teams...
    ],
  },
  {
    game: "TT Rankings",
    teams: [
      { name: "Gladiator", score: 10 },
      { name: "Fire Birds", score: 15 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 12 },
      { name: "Warlords", score: 20 },
      { name: "Black Archers", score: 18 },
      { name: "Snow Leopards", score: 14 },
      { name: "Tridents", score: 9 },
      // Add more teams...
    ],
  },
  {
    game: "Kabaddi Rankings",
    teams: [
      { name: "Team A", score: 10 },
      { name: "Team B", score: 15 },
      { name: "Team C", score: 8 },
      { name: "Team D", score: 12 },
      { name: "Team E", score: 20 },
      { name: "Team F", score: 18 },
      { name: "Team G", score: 14 },
      { name: "Team H", score: 9 },
      // Add more teams...
    ],
  },
  {
    game: "Yoga Rankings",
    teams: [
      { name: "Gladiator", score: 10 },
      { name: "Fire Birds", score: 15 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 12 },
      { name: "Warlords", score: 20 },
      { name: "Black Archers", score: 18 },
      { name: "Snow Leopards", score: 14 },
      { name: "Tridents", score: 9 },
      // Add more teams...
    ],
  },
  // Add more games...
];

// Function to sort teams by score
const sortByScore = (teams) => {
  return teams.sort((a, b) => b.score - a.score);
};

// Component to display game rankings
function GameRankingsCard({ game, teams }) {
  return (
    <div className="GameRankingsCard">
      <div className="Card">
        <h2>{game}</h2>
        <table>
          <thead>
            <tr>
              <th>TEAMS</th>
              <th>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {sortByScore(teams).map((team, i) => (
              <tr key={i}>
                <td> {team.name}</td>
                <td>{team.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Main component to display rankings for all games
function GameRankings() {
  return (
    <div className="GameRankings">
      <div className="flex-container">
        {rankings.map((ranking, index) => (
          <GameRankingsCard
            key={index}
            game={ranking.game}
            teams={ranking.teams}
          />
        ))}
      </div>
    </div>
  );
}

export default GameRankings;
