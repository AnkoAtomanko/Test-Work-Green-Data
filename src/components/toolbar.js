import React from 'react'

const Toolbar = () => {
    return (
        <div className="container">
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-primary">Добавить</button>
                <button type="button" className="btn btn-primary">Удалить</button>
            </div>
        </div>
    );
 }

 export default Toolbar;