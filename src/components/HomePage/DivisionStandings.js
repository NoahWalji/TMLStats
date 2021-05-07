import React from "react"
import '../../index.css'


class DivisionStandings extends React.Component {


    constructor(props) {
        super()
        this.state = {
            teamStat: [],
            standing: [],
        }
    }

    render() {
            if (this.props.loaded) {
                return (
                    <div className="standings">
                    <h1>Standings: (North Division)</h1>
                    <table cellSpacing="0" className="standingsTable">
                        <tbody>
                            <tr>
                                <th>Team</th> 
                                <th>GP</th> 
                                <th>W</th> 
                                <th>L</th> 
                                <th>OTL</th> 
                                <th>Pts</th>
                                <th>GF</th> 
                                <th>GA</th> 
                                <th>Diff</th>
                            </tr>
        
                       
                            {this.props.teams
                            .sort((a, b) => a.divisionRank.rank - b.divisionRank.rank)
                            .map((team,index) =>
                                <tr className="teamRow" key={team.team.id}>
                                    <td className="teamNameCell"><img className="standingsImg" src={process.env.PUBLIC_URL + '/assets/' + team.team.id + ".png"} alt="Loading"/> <p className="standingsName">{team.team.name}</p></td>
                                    <td>{team.stats.gamesPlayed}</td>
                                    <td>{team.stats.standings.wins}</td>
                                    <td>{team.stats.standings.losses}</td>
                                    <td>{team.stats.standings.overtimeLosses}</td>
                                    <td className="teamPoints">{team.stats.standings.points}</td>
                                    <td>{team.stats.miscellaneous.goalsFor}</td>
                                    <td>{team.stats.miscellaneous.goalsAgainst}</td>
                                    <td>{team.stats.miscellaneous.goalsFor - team.stats.miscellaneous.goalsAgainst}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                )    
            }

            else {
                return(<div></div>)
            }
        
      }



}
  export default DivisionStandings