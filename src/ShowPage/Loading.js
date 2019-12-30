import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Lottie from 'react-lottie';
import animationData from "../styles/gameLoader.json"


export const LoadingSpinerComponent = (props) => {
     const { promiseInProgress } = usePromiseTracker();

      const options = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
     
      return (
        <div>
        {
          (promiseInProgress === true) ?
            // <div className="sweet-loading">
            // <DotLoader
            // css={override}
            // size={700} 
            // color={"#36D7B7"}
            // />
            // </div>
            <Lottie options={options}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
              />
          :
            null
        }
      </div>
      )
};