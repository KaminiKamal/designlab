import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import NavBar from "./NavBar";

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            hospital_date: null,
            hospital_days: null,
            hospital_name: null,
            schedules: [
                {
                    "date" :  "2018-05-10",
                    "noOfDays" : 10,
                    "name" : "Ruby Hospital"
                },
                {
                    "date" :  "2018-05-11",
                    "noOfDays" : 10,
                    "name" : "Apollo Hospital"
                },
                {
                    "date" :  "2018-05-12",
                    "noOfDays" : 10,
                    "name" : "Dhirubhai Ambani Hospital"
                }
            ]
        }
    }
    
    searchHospital(e){
        //browserHistory.push("/book-accomodation");
        console.log("searchHospital", this.state)
        console.log("this.state", this.state);
        let selected_data = [];
        _.forEach(this.state.schedules, (element, index) => {
            console.log("element::", element)
        })

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
                                        <i class="material-icons prefix">date_range</i>
                                        <input type="date" onChange={(e) => {this.setState({hospital_date: e.target.value})}}/>
                                        {/* <label>Date</label> */}
                                    </div>

                                    <div className="input-field col s6">
                                        <i class="material-icons prefix">arrow_drop_down_circular</i>
                                        <input type="number" onChange={(e) => {this.setState({hospital_days: Number(e.target.value)})}}/>
                                        <label>No. of Days</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <i class="material-icons prefix">local_hospital</i>
                                        <input type="text" onChange={(e) => {console.log("select", e.target.value);this.setState({hospital_name: e.target.value})}} />
                                        <label>Hospital</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <button className="btn waves-effect waves-light" 
                                            onClick={this.searchHospital.bind(this)}>
                                                Search
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