import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  fetchMovies} from '../../actions/movies.actions';
import {  pageActiveChanged } from '../../actions/page.actions';
import { connect } from 'react-redux';
import '../../App.css';
import { Redirect } from 'react-router-dom';


class MovieDetailPage extends Component {

    constructor(props) {
        super(props);
        this.props.pageActiveChanged(false);

      }

      state= {    
        id: this.props.movie ? this.props.movie.id : null,
        name: this.props.movie ? this.props.movie.name: '',
        genre: this.props.movie ? this.props.movie.genre: '',
        year: this.props.movie ? this.props.movie.year: '',
        director: this.props.movie ? this.props.movie.director: '',
        url: this.props.movie ? this.props.movie.url: '',
        description: this.props.movie ? this.props.movie.description: '',
        done: false
    }

    backSubmit= (e) => {
        e.preventDefault();
        this.setState({ done: true})
    }

    
  render() {
    const form= (
        <div className="container-fluid">  
            <div className="text-left m-3">
                <button className="btn btn-secondary" onClick={this.backSubmit} >{"<<<"}</button>
            </div>
                <div className="row content m-5">
                    <div className="col-sm-4 sidenav">
                        <h1>{this.state.name}</h1>
                        <p>{this.state.description}</p>
                        <hr/>
                        <nav className="row text-left">
                            <h5 className="m-2">Genre: </h5>
                            <p className="m-2">{this.state.genre}</p>
                        </nav>
                        <nav className="row text-left">
                            <h5 className="m-2">Release Year: </h5>
                             <p className="m-2">{this.state.year}</p>
                        </nav>
                        <nav className="row text-left">
                            <h5 className="m-2">Director: </h5>
                            <p className="m-2">{this.state.director}</p>
                        </nav>
                    </div>
                    <div className="col-sm-7 text-center"> 
                        <img src={this.state.url} className="img" alt="Responsive image"/> 
                    </div>
                </div>
            </div>
    )
    return  (<div>
        { this.state.done ? <Redirect push to="/movies" /> : form }
             </div>
     );
  }
}

function mapStateToProps(state, props) {
      return {
          movie: state.movies.find(item => item.id == props.match.params.id),
          activePage: state.activePage
      }
    }

  
const mapDispatchToProps = dispatch => ({
    fetchMovies: (name, pageSize, pageNumber) => dispatch(fetchMovies(name, pageSize, pageNumber)),  
    pageActiveChanged: active => dispatch(pageActiveChanged(active)),

  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);

