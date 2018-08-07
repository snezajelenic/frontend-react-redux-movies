import React from "react";
import { connect } from "react-redux";
import { pageSizeChanged, pageNumberChanged } from '../../actions/page.actions'


const PagingComponent = props => {
    // console.log("ovde: " + props.count.map(count1 => count1.count) )
    return (     
        <div className="container">
            <div className="d-flex flex-row-reverse">          
              <ul className="pagination">
                <li className="page-item">
                    <input 
                        type="button" 
                        className="btn-page" 
                        value="<<"
                        onClick={e => {
                            if(props.paging.pageNumber > 1){
                                props.pageNumberChanged(props.paging.pageNumber - 1)
                        }}}/>
                </li>
                <li className="page-item">
                    {props.paging.pageNumber}
                </li>
                <li className="page-item">
                    <input 
                        type="button" 
                        className="btn-page" 
                        value=">>" 
                        onClick={e => {
                            if(props.movies.length > 0){
                                props.pageNumberChanged(props.paging.pageNumber + 1)

                        }}}/>
                </li>
              </ul>

            <ul className="dropdown">
               Page size:   
                <select className="options"
                    value={props.paging.pageSize}
                    onChange={e => props.pageSizeChanged(e.currentTarget.value)}>>
                    <option value={1000}>All</option>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select> 
            </ul>
            </div>
            </div>
    );
};

const mapDispatchToProps = dispatch => ({
    pageSizeChanged: size => dispatch(pageSizeChanged(size)),
    pageNumberChanged: number => dispatch(pageNumberChanged(number)),
  });

const mapStateToProps = state => ({
    paging: state.paging,
    movies: state.movies,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PagingComponent);