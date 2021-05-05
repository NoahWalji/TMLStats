import { render } from "@testing-library/react";
import React from "react"
import {Route, BrowserRouter} from "react-router-dom";


import Home from "./components/HomePage/Home.js"
import Loading from "./Loading.js"
import PlayerDetails from "./components/PlayerStatstics/PlayerDetails.js"


class App extends React.Component {

    render() {
        return(
            <div>
                <Loading/>
                <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                    <Route path="/player/:id" component={PlayerDetails}/>
                </BrowserRouter>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('root'));