import React from "react"
import './index.css'
import {usePromiseTracker} from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const Loading = props => {
    const { promiseInProgress } = usePromiseTracker({area: props.area});

    return (
        promiseInProgress &&
        <div
            style={{
                    width: "100",
                    height: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
            <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
        </div>
        
    )
}
  export default Loading