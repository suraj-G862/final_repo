import React from "react";
import "./styles/stats.css"

// Dummy data for demonstration
const rankings = [
  // Add rankings for other games
  {
    game: "Badminton Rankings",
    teams: [
      { name: "Gladiator", score: 0 },
      { name: "Fire Birds", score: 0 },
      { name: "Silver Falcons", score: 0 },
      { name: "Desert Hawks", score: 0 },
      { name: "Warlords", score: 0 },
      { name: "Black Archers", score: 0 },
      { name: "Snow Leopards", score: 0 },
      { name: "Tridents", score: 0 },
      // Add more teams...
    ],
  },
  // Add rankings for other games here...
  {
    game: "Cricket Rankings",
    teams: [
      { name: "Gladiator", score: 0 },
      { name: "Fire Birds", score: 0 },
      { name: "Silver Falcons", score: 0 },
      { name: "Desert Hawks", score: 0 },
      { name: "Warlords", score: 0 },
      { name: "Black Archers", score: 0 },
      { name: "Snow Leopards", score: 0 },
      { name: "Tridents", score: 0 },
      // Add more teams...
    ],
  },
  {
    game: "Chess Rankings",
    teams: [
      { name: "Gladiator", score: 7 },
      { name: "Fire Birds", score: 1 },
      { name: "Silver Falcons", score: 4 },
      { name: "Desert Hawks", score: 8 },
      { name: "Warlords", score: 6 },
      { name: "Black Archers", score: 3 },
      { name: "Snow Leopards", score: 2 },
      { name: "Tridents", score: 5 },
      // Add more teams...
    ],
  },
  {
    game: "Volleyball Rankings",
    teams: [
      { name: "Gladiator", score: 7 },
      { name: "Fire Birds", score: 1 },
      { name: "Silver Falcons", score: 8 },
      { name: "Desert Hawks", score: 5 },
      { name: "Warlords", score: 2 },
      { name: "Black Archers", score: 4 },
      { name: "Snow Leopards", score: 6 },
      { name: "Tridents", score: 3 },
      // Add more teams...
    ],
  },
  {
    game: "Football Rankings",
    teams: [
      { name: "Gladiator", score: 0 },
      { name: "Fire Birds", score: 0 },
      { name: "Silver Falcons", score: 0 },
      { name: "Desert Hawks", score: 0 },
      { name: "Warlords", score: 0 },
      { name: "Black Archers", score: 0 },
      { name: "Snow Leopards", score: 0 },
      { name: "Tridents", score: 0 },
      // Add more teams...
    ],
  },
  {
    game: "TT Rankings",
    teams: [
      { name: "Gladiator", score: 1 },
      { name: "Fire Birds", score: 4 },
      { name: "Silver Falcons", score: 3 },
      { name: "Desert Hawks", score: 2 },
      { name: "Warlords", score: 7 },
      { name: "Black Archers", score: 5 },
      { name: "Snow Leopards", score: 8 },
      { name: "Tridents", score: 6 },
      // Add more teams...
    ],
  },
  {
    game: "Kabaddi Rankings",
    teams: [
      { name: "Gladiator", score: 0 },
      { name: "Fire Birds", score: 0 },
      { name: "Silver Falcons", score: 0 },
      { name: "Desert Hawks", score: 0 },
      { name: "Warlords", score: 0 },
      { name: "Black Archers", score: 0 },
      { name: "Snow Leopards", score: 0 },
      { name: "Tridents", score: 0 },
      // Add more teams...
    ],
  },
  {
    game: "Yoga Rankings",
    teams: [
      { name: "Gladiator", score: 0 },
      { name: "Fire Birds", score: 0 },
      { name: "Silver Falcons", score: 0 },
      { name: "Desert Hawks", score: 0 },
      { name: "Warlords", score: 0 },
      { name: "Black Archers", score: 0 },
      { name: "Snow Leopards", score: 0 },
      { name: "Tridents", score: 0 },
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
