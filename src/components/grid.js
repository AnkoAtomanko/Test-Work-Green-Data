import React from 'react'
import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";

const Grid = () => {
    return (
        <div class="container-fluid">
            <div className="row">
                <LeftContainer />
                <RightContainer />

            </div>
        </div>
    );
 }

 export default Grid;