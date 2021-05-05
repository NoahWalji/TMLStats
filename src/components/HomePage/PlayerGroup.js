import React from "react"
import '../../index.css'
import Players from "./Players.js"


class PlayerGroup extends React.Component {


    constructor(props) {
        super()
        this.state = {
        }
    }

    render() {
        if (this.props.loaded) {

            let position = ""
            if (this.props.position === "LW,RW,C") {
                position = "Forwards";
            }
    
            else if (this.props.position === "D") {
                position = "Defenseman"
            }
    
            else {
                position = "Goalies"
            }
    
    
    
    
            let player = this.props.players.map(function(player,i) {
                if (player.player.currentRosterStatus === "ROSTER" || player.player.currentRosterStatus === "INJURY_LIST") {
                    return(
                        <Players player={player}/>
                    )
                }
    
                else {
                    return ""
                }
            })
            return (
                <div className="playerGroup">
                    <h1>{position}</h1>
                    {player}
                </div>
    
            );
        }
        
        else {
            return(<div></div>)
        }
       
      }


}

  export default PlayerGroup