import React from "react"
import '../../index.css'
import PlayerStatsTable from "./PlayerStatsTable.js"
import GoalieStatsTable from "./GoalieStatsTable.js"

import { trackPromise } from 'react-promise-tracker';


class PlayerDetails extends React.Component {


    constructor(props) {
        super()
        this.state = {
            isLoaded: false,
            playerInfo: [],
            playerStats: [],
            playerShoots: null,
            playerScoring: [],
            playerSkating: [],
            playerPenalties: [],
            goalieStats: [],
            injuryStatus: null,
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const url = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2021-regular/player_stats_totals.json?player=" + id;

        trackPromise(
            fetch(url, { 
                headers: new Headers({
                  'Authorization': 'Basic '+btoa('1e3895c7-87b5-4460-9249-8fc296:MYSPORTSFEEDS'), 
                }), 
            })
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        playerInfo: data.playerStatsTotals[0].player,
                        playerStats: data.playerStatsTotals[0].stats
                    });
                    this.setState({
                        playerShoots: this.state.playerInfo.handedness.shoots,
                        playerScoring: this.state.playerStats.scoring,
                        playerSkating: this.state.playerStats.skating,
                        playerPenalties: this.state.playerStats.penalties,
                        goalieStats: this.state.playerStats.goaltending,
                        injuryStatus: this.state.playerInfo.currentInjury,
                        isLoaded: true
                    })
                }
            )
        )
    }

    render() {

        if (this.state.isLoaded) {
            let player = this.state.playerInfo
            let stats = this.state.playerStats
            let scoring = this.state.playerScoring
            let skating = this.state.playerSkating
            let penalities = this.state.playerPenalties
            let goalie = this.state.goalieStats
            let table;
            let shoots;
            let injury = this.state.injuryStatus;

            if (player.primaryPosition === 'G') {
                table = <GoalieStatsTable position={player.primaryPosition} stats={stats} goalie={goalie} skating={skating} penalities={penalities}/>
            }

            else {
                table = <PlayerStatsTable position={player.primaryPosition} stats={stats} scoring={scoring} skating={skating} penalities={penalities}/>
                shoots = <p>Shoots: {this.state.playerShoots}</p>
            }

            if (injury !== null) {
                injury = "Injuried: " + injury.description.charAt(0).toUpperCase() + injury.description.slice(1);
            }

            return (
                <div className="player-container">
                    <a href="/" className="back-button">←</a>
                    <img src={player.officialImageSrc == null ? "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/skater.jpg" : player.officialImageSrc} alt=""
                    className="details-img"/>
                    <p className="details-title">{player.firstName} {player.lastName} (#{player.jerseyNumber})</p>
                    <p className="details-title">{player.primaryPosition} | {player.height} | {player.weight} lb</p>

                    <p>Born: {player.birthDate}</p>
                    <p>Birthplace: {player.birthCity}, {player.birthCountry}</p>
                    {shoots}
                    <p>{injury}</p>
                    {table}
                    

                    
                </div>
            )
        }
        else {
            return <div></div>
        }
        
      }



}

  export default PlayerDetails