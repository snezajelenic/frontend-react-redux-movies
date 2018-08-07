import React, { Component } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
           
           
class Footer extends Component {
    render() {
        return (
            <div>                  
                <div className="row">
                    <div className="fixed-bottom">
                        <hr/>
                        <footer>
                            <p>&copy; Copyright 2018 Sneza</p>
                        </footer>
                    </div>
                </div>
            </div>    
                );
             }
        }
           
export default Footer;
           
           
          