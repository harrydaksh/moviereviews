import React from 'react';
import Pagination from "./Pagination";

const Table = (props) => {
  let  movieData = props.movieData
    let filterData = props.selectedFilter
   let filterdData =movieData.filter((el)=>{
    if (filterData==="All")
    {
        return movieData
    }
    else if ( el.name===filterData)
    {
        return el
    }

   })
    return (
<>
        <table className="table mt-4">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Year</th>
                <th scope="col">pantone_value</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                {
                    filterdData.map((ele)=>(
                        <tr key={ele.id}>
                        <th scope="row">{ele.id}</th>
                        <th>{ele.name}</th>
                        <th>{ele.year}</th>
                        <th>{ele.pantone_value}</th>
                        <th>like</th>
                        <th><button type="button" className="btn btn-danger">delete</button></th>
                        </tr>
                    ))
                }

            {/*<tr>*/}
            {/*    <th scope="row">2</th>*/}
            {/*    <td>Jacob</td>*/}
            {/*    <td>Thornton</td>*/}
            {/*    <td>@fat</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <th scope="row">3</th>*/}
            {/*    <td colSpan="2">Larry the Bird</td>*/}
            {/*    <td>@twitter</td>*/}
            {/*</tr>*/}
            </tbody>
        </table>
<Pagination/>
</>
    );
};

export default Table;