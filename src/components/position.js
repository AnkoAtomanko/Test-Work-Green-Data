import React from 'react'

const Position = () => {
    return (
        <div className="container">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Должность
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Должность 1</a>
                    <a className="dropdown-item" href="#">Должность 2</a>
                    <a className="dropdown-item" href="#">Должность 3</a>
                </div>
            </div>
        </div>
    );
 }

 export default Position;