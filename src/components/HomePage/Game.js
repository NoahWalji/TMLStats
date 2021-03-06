import React from "react"
import '../../index.css'
import Team from "./Team.js"


class Game extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            subText: ""
        }
    }

    async componentDidMount() {
        if (this.props.liveGame) {
            this.getSubText()
        }  
    }

    getSubText() {
        if (this.props.nextGame.scoring.currentPeriod === null) {
            this.setState({subText: "Intermission"})
        }

        else if (this.props.nextGame.scoring.currentPeriod > 3) {
            this.setState({subText: "Period: Overtime"})
        }

        if (this.props.nextGame.game.playedStatus !== "LIVE") {
            this.setState({subText: "Final Score"})
        }
    }
    
    render() {

        if (this.props.loaded) {
            if (this.props.noGame === false) {
                return (
                    <div className="game">
                        <Team loaded={this.props.loaded} type="awayTeam" id={this.props.awayTeam.id} abbreviation={this.props.awayTeam.abbreviation} score={this.props.awayTeamScore} stat={this.props.awayTeamStat}/>
                        <Team  loaded={this.props.loaded} type="homeTeam" id={this.props.homeTeam.id} abbreviation={this.props.homeTeam.abbreviation} score={this.props.homeTeamScore} stat={this.props.homeTeamStat}/>
                        <p className="subText">{this.state.subText !== "" ? this.state.subText : this.props.subText}</p>
                    </div>
                );
            }

            else {
                return (
                    <div className="game">
                        <p className="subText">The Toronto Maple Leafs Season Has Ended. There are no currently scheduled games.</p>
                        <p className="subText">2021 Season Statistics Can Be Viewed Below.</p>
                    </div>
                );    
            }

        }

        else {
            return (<div></div>)
        }


      }
}
  export default Game