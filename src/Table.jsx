import React from 'react';
import Pagination from "./Pagination";
import './Table.css'

class Table extends React.Component {
    state={
        currPage:1,
    }
    render() {


        let movieData = this.props.movieData
        let filterData =  this.props.selectedFilter


        let numberOfPages = Math.ceil(filterData.length/4)

        let filterdData = movieData.filter((el) => {
            if (filterData === "All") {
                return movieData
            } else if (el.name === filterData) {
                return el
            }

        })
        let arrToBeUsedInTable = filterdData.slice(0, 4)
        return (
            <>
                <table className="table mt-4">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Year</th>
                        <th scope="col">pantone_value</th>
                        <th scope="col "></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        arrToBeUsedInTable.map((ele) => (
                            <tr key={ele.id}>
                                <td scope="row">{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.year}</td>
                                <td>{ele.pantone_value}</td>
                                <td>
                                <span onClick={(e) => {
                                    if (e.currentTarget.innerText == "favorite") {
                                        e.currentTarget.innerText = 'favorite_border'
                                    } else {
                                        e.currentTarget.innerText = "favorite"
                                    }
                                }
                                } className="material-icons-outlined pt">favorite_border</span>
                                </td>
                                <th>
                                    <button onClick={() => {
                                        this.props.deletemovie(ele.id)
                                    }} type="button" className="btn btn-danger">delete
                                    </button>
                                </th>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Pagination activePage={this.state.currPage} numberOfpages={numberOfPages} />
            </>
        );
    }
};

export default Table;