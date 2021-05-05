import React from "react"
import {Link} from "react-router-dom"
import '../../index.css'


class Player extends React.Component {


    constructor(props) {
        super()
    }

    render() {
        return (
            <div key={this.props.player.player.id} className="player">
                <Link to={"/player/" + this.props.player.player.id}><img src={this.props.player.player.officialImageSrc == null ? "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/skater.jpg" : this.props.player.player.officialImageSrc} alt=""
                className="player-img"/></Link>
                <p className="player-name">{this.props.player.player.firstName} {this.props.player.player.lastName}</p>
            </div>
        )
      }



}

  export default Player