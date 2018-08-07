import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import  SearchComponent  from './components/search/SearchComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieForm from './components/movies/MovieForm';
import HomePage from './components/home/HomePage';
import MoviesPage from './components/movies/MoviesPage';
import MovieDetailPage from './components/movies/MovieDetailPage';
import LoginPage from './components/users/LoginPage';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="myNavbar" className="navbar navbar-default navbar-inverse navbar-fixed-top" >
          <div className="container">
            <div className="navbar-header">
              <Link className="btn btn-outline-warning" to="/">Home</Link>
              <Link className="btn btn-outline-warning" to="/movies">Movies</Link>
              <Link className="btn btn-outline-warning" to="/movies/new">Add New Movie</Link>
            </div>
            <div className="navbar-search">
              <SearchComponent/>
            </div>
            <div className="navbar-login">
              <Link className="btn btn-outline-warning" to="/login">Login</Link>
            </div>
          </div>
        </nav> 
          <Route exact path="/" component={HomePage}/>  
          <Route exact path="/movies" component={MoviesPage}/>         
          <Route exact path="/movies/new" component={MovieForm}/>
          <Route exact path="/login" component={LoginPage}/>  
          <Route exact path="/movie/:id" component={MovieForm}/> 
          <Route exact path="/movie/detail/:id" component={MovieDetailPage}/> 
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
