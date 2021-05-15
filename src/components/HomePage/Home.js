import React from "react"
import '../../index.css'
import axios from 'axios';

import PlayerGroup from "./PlayerGroup.js"
import Game from "./Game.js"
import DivisionStandings from "./DivisionStandings.js"
import { trackPromise } from 'react-promise-tracker';

class Home extends React.Component {


    constructor(props) {
        super()
        this.state = {
            teams: [],
            forwards: [],
            defense: [],
            goalie: [],
            game: [],
            liveGame: false,
            timeLeft: "",
            awayTeam: [],
            awayTeamScore: [],
            homeTeam: [],
            homeTeamScore: [],
            subText: [],
            loaded: false,
            awayTeamStat: [],
            homeTeamStat: [],
        }
    }

    
    async componentDidMount() {
        const headers = {'Authorization': 'Basic '+btoa(process.env.REACT_APP_API_USERNAME + ":" + process.env.REACT_APP_API_PASSWORD)}
        const divisionURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2021-regular/standings.json?team=2,12,13,14,21,23,24";
        const forwardURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2021-regular/player_stats_totals.json?team=TOR&rosterstatus=assigned-to-roster&position=LW,RW,C"
        const defenseURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2021-regular/player_stats_totals.json?team=TOR&rosterstatus=assigned-to-roster&position=D"
        const goalieURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2021-regular/player_stats_totals.json?team=TOR&rosterstatus=assigned-to-roster&position=G"
        const gameURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/current/games.json?status=unplayed,in-progress&team=TOR"

        trackPromise(
        axios.get(divisionURL, {headers: headers}).then(res => {this.setState({teams: res.data.teams})}),
        axios.get(forwardURL, {headers: headers}).then(res => {this.setState({forwards: res.data.playerStatsTotals})}),
        axios.get(defenseURL, {headers: headers}).then(res => {this.setState({defense: res.data.playerStatsTotals})}),
        axios.get(goalieURL, {headers: headers}).then(res => {this.setState({goalie: res.data.playerStatsTotals})}),
        axios.get(gameURL, {headers: headers}).then(res => {
            this.setState({game: res.data.games[0]})
            if (this.state.game.schedule.playedStatus === "LIVE") {
                const liveGameURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/current/games/" + this.state.game.schedule.id + "/boxscore.json";
                axios.get(liveGameURL, {headers: headers}).then(res=> {
                    this.setState({game: res.data, liveGame: true})
                    this.setState({timeLeft: this.state.game.scoring.currentPeriodSecondsRemaining})
                    var minutes = Math.floor(this.state.timeLeft/60);
                    var seconds = this.state.timeLeft % 60;
                    this.setState({
                        awayTeam: this.state.game.game.awayTeam,
                        awayTeamScore: this.state.game.scoring.awayScoreTotal,
                        homeTeam: this.state.game.game.homeTeam,
                        homeTeamScore: this.state.game.scoring.homeScoreTotal,
                        subText: "P" + this.state.game.scoring.currentPeriod + " (" + minutes + ":" + seconds + ")"
                    })
                    this.getTeamData(headers)
                })

            }
    
            else {
                let date = new Date(this.state.game.schedule.startTime)
                let options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'};
                this.setState({
                    awayTeam: this.state.game.schedule.awayTeam,
                    awayTeamScore: this.state.game.score.awayScoreTotal,
                    homeTeam: this.state.game.schedule.homeTeam,
                    homeTeamScore: this.state.game.score.homeScoreTotal,
                    subText: date.toLocaleString('en-US', options)
                })
                this.fixSubText(date)
                this.getTeamData(headers)
    
            }
            
        }),
        ).then(res => {this.setState({loaded: true})})



        

    }

    fixSubText(date) {
        const today = new Date();
        const tommorow = new Date(today);
        tommorow.setDate(tommorow.getDate() + 1);

        if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {

            this.setState({subText: "Today @ " + date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' })})

        }

        else if (date.getDate() === tommorow.getDate() && date.getMonth() === tommorow.getMonth() && date.getFullYear() === tommorow.getFullYear()) {
            this.setState({subText: "Tommorow @ " + date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' })})
        }
    }

    getTeamData(headers) {
        const awayTeamURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2021-regular/standings.json?team="+this.state.awayTeam.id;
        const homeTeamURL = "https://api.mysportsfeeds.com/v2.1/pull/nhl/2021-regular/standings.json?team="+this.state.homeTeam.id;

        axios.get(awayTeamURL, {headers: headers}).then(res => {
           this.setState({
               awayTeamStat: {wins: res.data.teams[0].stats.standings.wins, losses: res.data.teams[0].stats.standings.losses, otLosses: res.data.teams[0].stats.standings.overtimeLosses}
           });
        })
        axios.get(homeTeamURL, {headers: headers}).then(res => {
           this.setState({
               homeTeamStat: {wins: res.data.teams[0].stats.standings.wins, losses: res.data.teams[0].stats.standings.losses, otLosses: res.data.teams[0].stats.standings.overtimeLosses}
           });
        })
    }

    render() {

        if (this.state.loaded) {
            return (
                <div>
                    <Game loaded={this.state.loaded} liveGame={this.state.liveGame} nextGame={this.state.game} awayTeam={this.state.awayTeam} awayTeamScore={this.state.awayTeamScore}
                    homeTeam={this.state.homeTeam} homeTeamScore={this.state.homeTeamScore} subText={this.state.subText} awayTeamStat={this.state.awayTeamStat} homeTeamStat={this.state.homeTeamStat}/>
                    <DivisionStandings loaded={this.state.loaded}  teams={this.state.teams}/>
                    <PlayerGroup loaded={this.state.loaded}  position="LW,RW,C" players={this.state.forwards}/>
                    <PlayerGroup loaded={this.state.loaded}  position="D" players={this.state.defense}/>
                    <PlayerGroup loaded={this.state.loaded}  position="G" players={this.state.goalie}/>
                </div>
            );
        }

        else {
            return(<div></div>)
        }

        }
}
  export default Home