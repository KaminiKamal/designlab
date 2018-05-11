import React, { Component } from 'react';
import NavBar from './NavBar';

class SearchTrain extends Component{

    searchTrain(){

    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col s6 m4">
                        <div className="card yellow darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Search Train</span>
                                <div>
                                    <label>From Station:</label>
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>To Station:</label>
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Journey Date:</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="card-action">
                            <p>
                                <button 
                                    className="btn waves-effect waves-light" 
                                onClick={this.searchTrain.bind(this)}>Search</button>
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="col s6 m8">
                        <div className="card yellow darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Card Title</span>
                                <input type="text" />
                            </div>
                            <div className="card-action">
                            <p>jrvohv</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchTrain;