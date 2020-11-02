import React from 'react'

const Gender = () => {
    return (
        <div className="container">
            <div className="input-group">
                <div className="input-group">
                            <span className="input-group-addon">
                                <input type="radio" aria-label="..."/>
                            </span>
                    жен
                    <span className="input-group-addon">
                                <input type="radio" aria-label="..."/>
                            </span>
                    муж
                </div>
            </div>
        </div>
    );
 }

 export default Gender;