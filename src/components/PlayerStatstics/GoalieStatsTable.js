import React from "react"
import '../../index.css'


class GoalieStatsTable extends React.Component {


    constructor(props) {
        super()
    }

    render() {
        let stats = this.props.stats
        let goalie = this.props.goalie
        return (
            <table className="playerTable">
                <tbody>
                <tr>
                    <th>Season</th>
                    <th>GP</th> 
                    <th>GS</th> 
                    <th>W</th> 
                    <th>L</th> 
                    <th>T</th>
                    <th>OT</th> 
                    <th>SA</th> 
                    <th>GA</th>
                    <th>GAA</th>  
                    <th>SV%</th>
                    <th>SO</th>  
                    <th>MIN</th>   
                </tr>
                <tr>
                    <td>2020-2021</td>
                    <td>{stats.gamesPlayed}</td> 
                    <td>{goalie.gamesStarted}</td>
                    <td>{goalie.wins}</td>
                    <td>{goalie.losses}</td>
                    <td>-</td>
                    <td>{goalie.overtimeWins}</td>
                    <td>{goalie.shotsAgainst}</td>
                    <td>{goalie.goalsAgainst}</td>
                    <td>{goalie.goalsAgainstAverage}</td>
                    <td>{goalie.savePercentage}</td>
                    <td>{goalie.shutouts}</td>
                    <td>{goalie.minutesPlayed}</td>
                </tr>
                </tbody>
            </table>
        )
      }



}

  export default GoalieStatsTable