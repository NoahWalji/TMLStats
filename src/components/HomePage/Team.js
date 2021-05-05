import React from "react"
import '../../index.css'
import TeamGameStat from "./TeamGameStat.js"



class Team extends React.Component {


    constructor(props) {
        super()
    }

    render() {
        if (this.props.loaded) {
            return(
                <div id={this.props.type}>
                    <img className="teamImg" src={process.env.PUBLIC_URL + '/assets/' + this.props.id + ".png"} alt="Loading"/>
                    <p className="teamName">{this.props.abbreviation}</p>
                    <p className="teamScore">{this.props.score}</p>
                    <TeamGameStat loaded={this.props.loaded} id={this.props.id} wins={this.props.stat.wins} losses={this.props.stat.losses} otLosses={this.props.stat.otLosses}/>
                </div>
            )
        }

        else {
            return(<div></div>)
        }


      }



}

  export default Team