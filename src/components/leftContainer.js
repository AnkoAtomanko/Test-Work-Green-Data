import React from 'react'

const LeftContainer = () => {
    return (

                <div className="col">
                    <div className="alert alert-primary" role="alert">
                        <table className="table table-hover">
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
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Иван</td>
                                <td>Иванович</td>
                                <td>Иванов</td>
                                <td>Программист</td>
                                <td>01.01.1991</td>
                                <td>муж</td>
                                <td>-</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

    );
 }

 export default LeftContainer;