import React from 'react';

const Input = ({handleChange, name, label, error, ...rest}) => {

    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label} : </label>
            <input
                {...rest}
                onChange={handleChange}
                className="form-control"
                name={name}
                id={name}
            />
            { error && <div className="alert alert-danger">{error}</div> } {/*conditional rendering */ }
        </div>
    )
}

export default Input;