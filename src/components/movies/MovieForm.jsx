import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createMovie, editMovie, fetchMovies } from '../../actions/movies.actions';
import { pageActiveChanged } from '../../actions/page.actions';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


 class MovieForm extends Component {

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

    componentWillReceiveProps(props) {
        if(props.filter.text !== this.props.filter.text ||  
          props.paging.pageSize !== this.props.paging.pageSize ||
          props.paging.pageNumber !== this.props.paging.pageNumber){
            this.props.fetchMovies(props.filter.text, props.paging.pageSize, props.paging.pageNumber);
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            name: this.state.name,
            genre: this.state.genre,
            year: this.state.year,
            director: this.state.director,
            url: this.state.url,
            description: this.state.description
         };

         const edit_post = {
            id: this.state.id,
            name: this.state.name,
            genre: this.state.genre,
            year: this.state.year,
            director: this.state.director,
            url: this.state.url,
            description: this.state.description
         };

        if(this.props.movie === null){
            this.props.createMovie(post)
        }else {
            this.props.editMovie(edit_post)
        }

        this.props.fetchMovies(this.props.filter.text, this.props.paging.pageSize, this.props.paging.pageNumber);

        this.setState({ done: true})

    }


    handleCancel = (e) => {
        e.preventDefault();
        this.setState({ done: true})
    }

  render() {
    const form= (
        <div className="container">
            <div className="addform">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Add new movie</h1>
                    <br/>
                    <div className="field">
                        <label htmlFor="name">Name:</label>
                        <input 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control" 
                            type="text"
                            required/>
                    </div>
                    <div className="field">
                        <label htmlFor="genre">Genre:</label>
                        <input 
                            name="genre"
                            value={this.state.genre}
                            onChange={this.handleChange}
                            className="form-control" 
                            type="text"
                            required/>
                    </div>
                    <div className="director">
                        <label htmlFor="director">Director:</label>
                        <input 
                            name="director"
                            value={this.state.director}
                            onChange={this.handleChange}
                            className="form-control" 
                            type="text"
                            required/>
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description:</label>
                        <textarea  
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            className="form-control" 
                            type="text"
                            required/>
                    </div>
                    <div className="field">
                        <label htmlFor="year">Year:</label>
                        <input 
                            name="year"
                            value={this.state.year}
                            onChange={this.handleChange}
                            className="form-control" 
                            type="text"
                            required
                            pattern="[0-9]*" title="Please enter regular year format!"/>
                    </div>
                    <div className="field">
                        <label htmlFor="url">Picture url:</label>
                        <input 
                            name="url"
                            value={this.state.url}
                            onChange={this.handleChange}
                            className="form-control" 
                            type="text"
                            required/><br/>
                    </div>
                    <div className="field position-right">
                        <button className="btn btn-primary pull-left">Save</button>
                        <button className="btn btn-danger pull-right" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
    return (<div>
       { this.state.done ? <Redirect push to="/movies" /> : form }
            </div>
    );
  }
}

function mapStateToProps(state, props) {
  if(props.match.params.id){
    return {
        movie: state.movies.find(item => item.id == props.match.params.id),
        activePage: state.activePage,
        filter: state.filter,
        paging: state.paging

    }
  }
  return { movie: null,
        
    filter: state.filter,
    paging: state.paging,}

}

const mapDispatchToProps = dispatch => ({
    createMovie: post => dispatch(createMovie(post)),
    editMovie: (post,id) => dispatch(editMovie(post,id)),
    pageActiveChanged: active => dispatch(pageActiveChanged(active)),
    fetchMovies: (name, pageSize, pageNumber) => dispatch(fetchMovies(name, pageSize, pageNumber)),


});

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);