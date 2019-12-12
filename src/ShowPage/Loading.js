import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/core";

export const LoadingSpinerComponent = (props) => {
     const { promiseInProgress } = usePromiseTracker();

     const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        `;
     
      return (
        <div>
        {
          (promiseInProgress === true) ?
            <div className="sweet-loading">
            <DotLoader
            css={override}
            size={400} 
            color={"#36D7B7"}
            />
            </div>
          :
            null
        }
      </div>
      )
};