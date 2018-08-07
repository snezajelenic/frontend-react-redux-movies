import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie, fetchMovies } from '../../actions/movies.actions';
import '../../App.css';




class MovieList extends Component {
  constructor(props) {
    super(props);
  }
  
  state= {    
    done: false,
    movies: this.props.movies
  }
 
  handleClick = (id) =>{
    this.props.deleteMovie(id);
    this.props.fetchMovies(this.props.filter.text, this.props.paging.pageSize, this.props.paging.pageNumber);
  }

render(){
    const emptyMessage = (
      <p className="message">There are no movies in your collection</p>);

    const moviesList = (
      <div className="container">
        <div className="table-wrapper-scroll-y">         
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Genre</th>
                <th scope="col">Year</th>
                <th/><th/>
              </tr>
            </thead>           
            <tbody>           
              {this.props.movies.map(movie => 
              <tr key={movie.id}>
                <th scope="row">{movie.id}</th>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td className="list-buttons">
                  <Link 
                    to={`/movie/${movie.id}`} 
                    className="btn btn-outline-primary button1">
                    Edit
                  </Link>
                  <input 
                    type="button" 
                    className="btn btn-outline-danger" 
                    value="Delete" 
                    onClick={() => 
                      {this.handleClick(movie.id)}}>
                    </input>
                </td>
                <td className="list-detail-btn">
                <Link 
                    to={`/movie/detail/${movie.id}`} 
                    className="btn btn-primary ">
                    Details
                </Link>
                </td>
              </tr>)}         
            </tbody>
          </table>
        </div>  
      </div>)


    return (
      <div>
        {this.props.movies.length === 0 ? emptyMessage : moviesList }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  filter: state.filter,
  paging: state.paging
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: (name, pageSize, pageNumber) => dispatch(fetchMovies(name, pageSize, pageNumber)),
  deleteMovie: id => dispatch(deleteMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
