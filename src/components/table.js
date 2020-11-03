import Item from "./item";
import React from "react";


const Table = (props) => {
    return (
        props.state.data.map( item =>
                    <Item id={item.id}
                          name={item.name}
                          patronymic={item.patronymic}
                          surname={item.surname}
                          position={item.position}
                          birght={item.bight}
                          gender={item.gender}
                          fired={item.fired}
                    />
                )
            );
}

export default Table;