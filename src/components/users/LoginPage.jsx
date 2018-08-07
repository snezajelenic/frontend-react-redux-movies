import React, { Component } from 'react'
import { fetchUsers } from '../../actions/users.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.props.fetchUsers();

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
      }
    
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log(value)
      }
    
      login(e) {
        e.preventDefault();
        const { username, password, rememberMe } = this.state;
        this.props.login(username, password, rememberMe);
      }
     

      
  render() {
    return (
        <div className="container-fluid">
        <div className="row content m-5">
            <form onSubmit={this.login} method="POST" className="auth">
                <p className="textLabels">Username</p>
                <input
                className="textBox"
                name="username"
                required
                onChange={this.handleChange}
                />
                <br/>
                <br/>
                <p className="textLabels">Password</p>
                <input
                className="textBox"
                name="password"
                type="password"
                required
                onChange={this.handleChange}
                />
                <br />
                <br />
                <label >
                Remember me
                <input
                    type="checkbox"
                    name="rememberMe"
                    // defaultChecked={this.state.rememberMe}
                    // onChange={(e) => this.setState({ rememberMe: !this.state.rememberMe })}
                />
                </label>
                <br />
                <br />
                <input className="btn" type="Submit" defaultValue="Login" />
            </form>
        </div>
        </div>
    );
  }
}
//   render() {
//     return (
//       <div>
//            <table className="table">
//             <thead className="thead-light">
//               <tr>
//                 <th scope="col">ID</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Genre</th>
//                 <th scope="col">Year</th>
//                 <th/><th/>
//               </tr>
//             </thead>           
//             <tbody>           
//               {this.props.users.map(user => 
//               <tr key={user.id}>
//                 <th scope="row">{user.id}</th>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.username}</td>
//                 <td>{user.password}</td>
//               </tr>)}         
//             </tbody>
//           </table>
//           </div>
//     )
//   }
// }


const mapStateToProps = state => ({
    users: state.usersReducer,
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: users => dispatch(fetchUsers(users)),

});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);