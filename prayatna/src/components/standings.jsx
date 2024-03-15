import React, { useState } from 'react';
import "./styles/standings.css";

function PrayatnaRanking() {
  const [teams, setTeams] = useState([
    // { rank: 1, name: 'Snow Leopards', total: 16, f: 2, a: 4, gd: 12 },
    // { rank: 2, name: 'Gladiators', total: 99, f: 2, a: 4, gd: 12 },
    // { rank: 3, name: 'Warlords', total: 99, f: 2, a: 4, gd: 12 },
    // { rank: 4, name: 'Desert Hawks', total: 99, f: 2, a: 4, gd: 12 },
    // { rank: 5, name: 'Silver Falcons', total: 99, f: 2, a: 4, gd: 12 },
    // { rank: 6, name: 'Tridents', total: 99, f: 2, a: 4, gd: 12 },
    // { rank: 7, name: 'Black Archers', total: 99, f: 2, a: 4, gd: 12 },
    // { rank: 8, name: 'Firebirds', total: 99, f: 2, a: 4, gd: 12 }
    { rank: 1, name: 'Snow Leopards', total: 16 },
    { rank: 2, name: 'Gladiators', total: 15 },
    { rank: 3, name: 'Warlords', total: 15 },
    { rank: 4, name: 'Desert Hawks', total: 15 },
    { rank: 5, name: 'Silver Falcons', total: 15 },
    { rank: 6, name: 'Tridents', total: 14 },
    { rank: 7, name: 'Black Archers', total: 12 },
    { rank: 8, name: 'Firebirds', total: 6 }
  ]);

  return (
    <section className="standings-main">
      <section className="standings-heading">
        <h1>Prayatna Ranking</h1>
      </section>

      <section className="standings-container">
      <table className="standings-table" border={1} frame="void" rules="rows">
          <thead>
            <tr>
              <th width="10%" align="left">RANKING</th>
              <th width="45%" align="left">TEAM</th>
              <th width="15%" align="left">TOTAL</th>
              {/* <th width="15%" align="left">F</th>
              <th width="15%" align="left">A</th>
              <th width="15%" align="left">GD</th> */}
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.rank}</td>
                <td>{team.name}</td>
                <td>{team.total}</td>
                {/* <td>{team.f}</td>
                <td>{team.a}</td>
                <td>{team.gd}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default PrayatnaRanking;
