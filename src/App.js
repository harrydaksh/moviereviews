import './App.css'
import React from "react";
import data from './data.json'
class App extends React.Component {

    componentsDidMount(){
        let f = async () =>{
        let result = await fetch('./data.json')
            console.log(result,"jhbh")
          const res = await result.json()
            console.log(res,"res")
        };
        f()
    }
    render() {


        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Movies Rentals</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Customers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Rentals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group m-4">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className="col-9 p-4">
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
                        <table className="table mt-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                        <nav className="mt-4">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </ >
        );
    }
}

export default App;
