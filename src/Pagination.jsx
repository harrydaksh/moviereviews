import React from 'react';

const Pagination = (props) => {
    console.log(props)
    let arr=[];
    for (let i=0; i<props.numberOfpages;i++)
    {
        arr.push(i)
    }
    return (
        <nav className="mt-4">
            <ul className="pagination">

                {
                    arr.map((el)=>(
                        <li className="page-item"><a className="page-link" href="#">{`${el + 1}`}</a></li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;