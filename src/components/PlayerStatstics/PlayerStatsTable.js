import React from "react"
import '../../index.css'


class PlayerStatsTable extends React.Component {


    constructor(props) {
        super()
    }

    render() {
        let stats = this.props.stats
        let scoring = this.props.scoring
        let skating = this.props.skating
        let penalities = this.props.penalities
        return (
            <table className="playerTable">
                <tbody>
                <tr>
                    <th>Season</th>
                    <th>GP</th> 
                    <th>G</th> 
                    <th>A</th> 
                    <th>P</th> 
                    <th>+/-</th>
                    <th>PIM</th> 
                    <th>PPG</th> 
                    <th>PPP</th>
                    <th>SHG</th>  
                    <th>SHP</th>
                    <th>GWG</th>  
                    <th>OTG</th>  
                    <th>S</th>  
                    <th>S%</th>        
                </tr>
                <tr>
                    <td>2020-2021</td>
                    <td>{stats.gamesPlayed}</td> 
                    <td>{scoring.goals}</td>
                    <td>{scoring.assists}</td>
                    <td>{scoring.points}</td>
                    <td>{skating.plusMinus}</td>
                    <td>{penalities.penaltyMinutes}</td>
                    <td>{scoring.powerplayGoals}</td>
                    <td>{scoring.powerplayPoints}</td>
                    <td>{scoring.shorthandedGoals}</td>
                    <td>{scoring.shorthandedPoints}</td>
                    <td>{scoring.gameWinningGoals}</td>
                    <td>{scoring.overtimeGoals}</td>
                    <td>{skating.shots}</td>
                    <td>{skating.shotPercentage}%</td>
                </tr>
                </tbody>
            </table>
        )
      }



}

  export default PlayerStatsTable