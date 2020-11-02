import React from 'react'
import Item from "./item";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Отчество</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Должность</th>
                <th scope="col">Дата рождения</th>
                <th scope="col">Пол</th>
                <th scope="col">Уволен</th>
            </tr>
        </thead>
    );
 }

 export default TableHeader;