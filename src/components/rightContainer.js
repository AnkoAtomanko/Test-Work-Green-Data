import React from 'react'
import FullName from "./fullName";
import Position from "./position";
import DateOfBirth from "./dateOfBirth";
import Gender from "./gender";
import Fired from "./fired";
import Toolbar from "./toolbar";

const RightContainer = () => {
    return (

        <div className="col">
            <div className="alert alert-primary" role="alert">
                <div className="container">

                    <FullName />
                    <Position />
                    <DateOfBirth />
                    <Gender />
                    <Fired />
                    <Toolbar />

                </div>
            </div>
        </div>
    );
 }

 export default RightContainer;