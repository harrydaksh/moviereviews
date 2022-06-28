import React from 'react';

const Login = () => {
    return (
        <form className="col-4 m-auto p-4 bd mt-4">
            <fieldset >
                <legend>Login Form</legend>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Email</label>
                    <input type="text" id="disabledTextInput" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">Password</label>
                    <input type="password" id="disabledTextInput" className="form-control" />

                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                            <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                Can't check this
                            </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    );
};

export default Login;