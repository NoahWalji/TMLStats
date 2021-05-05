import React from "react"
import '../../index.css'


class TeamGameStat extends React.Component {


    constructor(props) {
        super()
    }

    render() {

        if (this.props.loaded) {
            return (
                <p className="teamScore">{this.props.wins}-{this.props.losses}-{this.props.otLosses}</p>
            )
        }

        else {
            return(<div></div>)
        }

      }



}
  export default TeamGameStat