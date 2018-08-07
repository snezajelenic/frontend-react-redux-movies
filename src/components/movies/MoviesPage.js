import React, { Component } from 'react'
import MovieList from '../movies/MovieList';
import PagingComponent from '../pagging/PagingComponent';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies.actions';
import { updateSearchText } from '../../actions/search.actions';
import { pageActiveChanged } from '../../actions/page.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

class MoviesPage extends Component {

  constructor(props) {
    super(props);
    
    //default state set in initialState
    this.props.fetchMovies(props.filter.text, props.paging.pageSize, props.paging.pageNumber);
    this.props.pageActiveChanged(true);

}

  componentWillReceiveProps(props) {
    // checking if the new props differ from the old ones, if they do make a get request
    if(props.filter.text !== this.props.filter.text ||  
      props.paging.pageSize !== this.props.paging.pageSize ||
      props.paging.pageNumber !== this.props.paging.pageNumber){
        this.props.fetchMovies(props.filter.text, props.paging.pageSize, props.paging.pageNumber);
    }

  }
  render() {
    return (
      <div>
        <PagingComponent/>
        <MovieList/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      movies: state.movies,
      filter: state.filter,
      paging: state.paging,
      activePage: state.activePage
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMovies: (name, pageSize, pageNumber) => dispatch(fetchMovies(name, pageSize, pageNumber)),
  fetchTotalCount: (name, pageSize, pageNumber) => dispatch(fetchMovies(name, pageSize, pageNumber)),
  updateSearch: text => dispatch(updateSearchText(text)),
  pageActiveChanged: active => dispatch(pageActiveChanged(active))
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
