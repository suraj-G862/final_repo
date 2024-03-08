import React, { useState } from 'react';
import "./styles/standings.css";

function PrayatnaRanking() {
  const [teams, setTeams] = useState([
    { rank: 1, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 },
    { rank: 2, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 },
    { rank: 3, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 },
    { rank: 4, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 },
    { rank: 5, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 },
    { rank: 6, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 },
    { rank: 7, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 },
    { rank: 8, name: 'Snow Leopards', total: 99, f: 2, a: 4, gd: 12 }
  ]);

  return (
    <section className="main">
      <section className="heading">
        <h1>Prayatna Ranking</h1>
      </section>

      <section className="container">
        <table border={1} frame="void" rules="rows">
          <thead>
            <tr>
              <th width="10%" align="left">RANKING</th>
              <th width="45%" align="left">TEAM</th>
              <th width="15%" align="left">TOTAL</th>
              <th width="15%" align="left">F</th>
              <th width="15%" align="left">A</th>
              <th width="15%" align="left">GD</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.rank}</td>
                <td>{team.name}</td>
                <td>{team.total}</td>
                <td>{team.f}</td>
                <td>{team.a}</td>
                <td>{team.gd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default PrayatnaRanking;
