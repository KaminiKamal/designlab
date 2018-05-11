import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import NavBar from "./NavBar";

class Accomodation extends Component {

    constructor(props){
        super(props);
        this.state = {
            hospital_date: null,
            hospital_days: null,
            hospital_name: null
        }
    }

    searchHospital(e){
        browserHistory.push("/book-train");
    }

    searchHotel(e){
        browserHistory.push("/search-hotel")
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
                                        <i class="material-icons prefix">local_hospital</i>
                                        <input type="text" 
                                            value="abc hospital"
                                        />
                                        {/* <label>Date</label> */}
                                    </div>

                                    <div className="input-field col s6">
                                        <i class="material-icons prefix">arrow_drop_down_circular</i>
                                        <input type="text" onChange={(e) => {this.setState({hospital_days: e.target.value})}}/>
                                        <label>No. of Bed</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <i class="material-icons prefix">local_hospital</i>
                                        <select onSelect={(e) => {console.log("select", e.target.value);this.setState({hospital_name: e.target.value})}}>
                                            <option value="" disabled selected>Select bed type</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>Bed type</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <button className="btn waves-effect waves-light" 
                                            onClick={this.searchHospital.bind(this)}>
                                                Next
                                            <i className="material-icons right">send</i>
                                        </button>
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
export default Accomodation;