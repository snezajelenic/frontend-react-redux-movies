import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { pageActiveChanged } from '../../actions/page.actions';
import { connect } from 'react-redux';
import "video-react/dist/video-react.css";
import { Player, ControlBar } from 'video-react';
import {
  Button, Form, FormGroup,
  Label, Input, Col
} from 'reactstrap';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props.pageActiveChanged(false);
  }

  state= {   
    source: sources['bunnyTrailer'], 
    images: [
      'https://resizing.flixster.com/9lNgA6qVeByhoAp6cQbYTX5MGn0=/206x305/v1.bTsxMjY2MjMzMjtqOzE3Nzg2OzEyMDA7MjYwMDszNzU2',
      'https://resizing.flixster.com/tP5ES1OWIXABfOHqAENTdoONdao=/206x305/v1.bTsxMjc1NDQwMjtqOzE3Nzg3OzEyMDA7NjQ1Ozk1NQ',
      'https://resizing.flixster.com/A4LSUg2cLmaB6hxONFEM3WGf2S4=/206x305/v1.bTsxMjY0MTk2MjtwOzE3Nzg2OzEyMDA7NjcyOzk5Nw'
    ]
}

  render() {
    return (
      <div className="container-fluid">  
        <div className="row content m-5">
          {/* <div className="col-sm-3 sidenav slideshow">
            <Slide
                images={this.state.images}
                duration={5000}
                transitionDuration={1000}
              />
            </div>  */}
            <div className="video">
              <Player
                ref="player"
                autoPlay>
                <source src={this.state.source} />
                <ControlBar autoHide={false} />
              </Player>
            </div>
          </div>
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      activePage: state.activePage
  }
}

const mapDispatchToProps = dispatch => ({
  pageActiveChanged: active => dispatch(pageActiveChanged(active)),
});


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
