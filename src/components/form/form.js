import React from 'react';

const Form = (props) => {

        return (
            <form onSubmit={props.weatherMessage}>
                <div className="input-group">
                    <input className="form-control" type="text" name="city" placeholder="City"/>
                    <span className="input-group-btn">
                        <button className="btn btn-info">Get Weather</button>
                    </span>
                </div>
            </form>
        );
}
export default Form;
