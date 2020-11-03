
const FullName = () => {
    return (
        <div className="container">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">ФИО*</span>
                </div>
                <input type="text" aria-label="Name" className="form-control"/>
                <input type="text" aria-label="Patronymic" className="form-control"/>
                <input type="text" aria-label="Surname" className="form-control"/>
            </div>
        </div>
    );
 }

 export default FullName;