import React from 'react'
import Item from "./item";
import TableHeader from "./tableHeader";


const LeftContainer = () => {
    let data = [{id:'1', name:'Иван', patronymic:'Иванович', surname:'Иванов', position:'Должность 1',  bight:'01.01.01', gender:'муж', fired:'-'},
                {id:'2', name:'Петр', patronymic:'Петрович', surname:'Петров', position:'Должность 2',  bight:'02.02.02', gender:'муж', fired:'+'}
                ]
    let dataList = data.map( item =>
        <Item id={item.id}
              name={item.name}
              patronymic={item.patronymic}
              surname={item.surname}
              position={item.position}
              birght={item.bight}
              gender={item.gender}
              fired={item.fired}
        />
    );

    return (
        <div className="col">
            <div className="alert alert-primary" role="alert">
                <table className="table table-hover">
                    <TableHeader />
                    {dataList[0]}
                    {dataList[1]}
                </table>
            </div>
        </div>
    );
 }

 export default LeftContainer;