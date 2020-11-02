import React from 'react'
import Item from "./item";
import TableHeader from "./tableHeader";

const LeftContainer = () => {
    return (
        <div className="col">
            <div className="alert alert-primary" role="alert">
                <table className="table table-hover">
                    <TableHeader />
                    <Item />
                </table>
            </div>
        </div>
    );
 }

 export default LeftContainer;