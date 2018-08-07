import React from 'react'
import { connect } from 'react-redux';
import { updateSearchText} from '../../actions/search.actions';
import { pageActiveChanged} from '../../actions/page.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


const SearchComponent = props => {
        var disabled = "disabled";
        var enabled = !disabled;

        if(props.activePage.active == true){
            disabled = enabled;
        }
        return (
                <form className="navbar-form navbar-left">
                    <div className="input-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={props.filter.text}
                            disabled = {disabled}
                            onChange={e => {
                                if(props.activePage.active == true){
                                    props.updateSearch(e.target.value)}
                                }
                            }
                        />                                
                    </div>
                </form>
        );
    };


const mapStateToProps = state => ({
        filter: state.filter,
        activePage: state.activePage
    });

const mapDispatchToProps = dispatch => ({
    updateSearch: text => dispatch(updateSearchText(text)),
    pageActiveChanged: active => dispatch(pageActiveChanged(active)),

});


export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);