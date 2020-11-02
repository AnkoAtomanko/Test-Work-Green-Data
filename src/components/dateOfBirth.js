import React from 'react'

const DateOfBirth = () => {
    return (
        <div className="container">
            <input type="date" className="form-control" id="date" name="date" placeholder="Дата" required/>
        </div>
    );
 }

 export default DateOfBirth;