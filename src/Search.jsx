import React from 'react';

const Search = () => {
    return (
        <>
        <p className="mt-4">showing movies from database</p>
    <button type="button" className="btn btn-success mt-4">New</button>
    <div className="row">
        <div className="col-4 mt-4">
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Search..."
                       aria-label="Username"
                       aria-describedby="addon-wrapping"/>
            </div>
        </div>
    </div>
        </>
    );
};

export default Search;