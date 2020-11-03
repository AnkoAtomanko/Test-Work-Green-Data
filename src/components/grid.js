import React from 'react'
import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";


const Grid = (props) => {
    return (
        <div class="container-fluid">
            <div className="row">
                <LeftContainer state={props.state} />
                <RightContainer />
            </div>
        </div>
    );
 }

 export default Grid;