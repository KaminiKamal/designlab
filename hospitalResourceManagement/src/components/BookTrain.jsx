import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import NavBar from "./NavBar";

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            hospital_date: null,
            hospital_days: null,
            hospital_name: null
        }
    }

    searchHospital(e){
        browserHistory.push("/book-accomodation");
    }
    searchHotel(e){
        
    }
    render(){
        console.log("this.state", this.state);
        return(
            <div>
                <NavBar />

                    <div className="col s6">
                        <div className="card">
                            <div className="col s12 m6">
                                <div>
                                    <div className="input-field col s6">
                                        <span>
                                            Start date
                                            <i class="material-icons prefix">date_range</i>
                                        </span>
                                        
                                        <input type="date" onChange={(e) => {this.setState({hospital_date: e.target.value})}}/>
                                        {/* <label>Date</label> */}
                                    </div>

                                    <div className="input-field col s6">
                                       
                                    </div>

                                    <div className="input-field col s6">
                                        <span>
                                            End date
                                            <i class="material-icons prefix">date_range</i>
                                        </span>
                                        
                                        <input type="date" onChange={(e) => {this.setState({hospital_date: e.target.value})}}/>
                                        {/* <label>Date</label> */}
                                    </div>

                                    <div className="input-field col s6">
                                        <button className="btn waves-effect waves-light" 
                                            onClick={this.searchHotel.bind(this)}>
                                                Book Hotel
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default HomePage;