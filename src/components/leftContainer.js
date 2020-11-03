import React from 'react'
import Item from "./item";
import TableHeader from "./tableHeader";
import Table from "./table";



const LeftContainer = (props) => {
    return (
        <div className="col">
            <div className="alert alert-primary" role="alert">
                <table className="table table-hover">
                    <TableHeader />
                    <Table state={props.state}/>
                </table>
            </div>
        </div>
    );
 }

 export default LeftContainer;
