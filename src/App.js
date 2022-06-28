import './App.css'
import React from "react";
import data from './data.json'
import Filter from "./Filter";
import Navbar from "./Navbar";
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

class App extends React.Component {
    state = {
        movie: [],
        isActive:"All"
    }
    setFilter=(filter)=>{
        this.setState({isActive:filter})
    }
    deleteMovie = (id) =>{
      let filterArr =  this.state.movie.filter((el)=>{
           return el.id != id
       })
        this.setState({movie:filterArr})
    }
    componentDidMount() {
        let f = async () => {
            let result = await fetch('https://reqres.in/api/products')

            const res = await result.json()
            this.setState(
                {
                    movie: res.data
                }
            )
        };
        f()
        // let  f =() =>{
        //     fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         .then(response => response.json())
        //         .then(json => console.log(json))
        // }

    }

    render() {


        return (
            <>
                <Navbar/>
                <div className="row">
                    <Filter handleFilter={this.setFilter} selectedFilter={this.state.isActive} movieData={this.state.movie}/>
                    <div className="col-9 p-4">
                        <Search/>
                        <Table deletemovie={this.deleteMovie} selectedFilter={this.state.isActive} movieData={this.state.movie} />

                    </div>
                </div>
            </ >
        );
    }
}

export default App;
