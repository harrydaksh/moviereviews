import React from 'react';

const Filter = (props)=> {
    return (
        <div className="col-3">
            <ul className="list-group m-4">
                <li className={`list-group-item pt ${props.selectedFilter==="All" ? "active":""}`}
                    onClick={(e)=>{props.handleFilter("All")}}
                >All</li>
                {
                    props.movieData.map((ele)=>(

                        <li className={`list-group-item pt ${props.selectedFilter===ele.name ? "active":""}`} key={ele.id}
                            onClick={(e)=>
                            props.handleFilter(ele.name)
                            }
                        >{ele.name}</li>

                    ))
                }
            </ul>
        </div>
    );
    }

export default Filter;