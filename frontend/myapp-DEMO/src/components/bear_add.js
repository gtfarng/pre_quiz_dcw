import React, { Component } from 'react';
import { fetchBears, addBear } from '../actions';
import { connect } from "react-redux";

class BearAdd extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', weight: 0 };
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });

    }

    handlerUpdateBear = (e) => {
        e.preventDefault();
        this.props.addBear(
            this.state.name,
            this.state.weight
            ,
            (item) => {
                console.log('item' + item)
                this.props.fetchBears();
            });
    }

    render() {
        return (
            <div>

                <h3 className="head" align="center">Add Bear</h3><br />

                <form align="center">

                    <input className="form-control" type="text" name="name" onChange={this.handleChange} placeholder="Name..." /><br/>
                    <input className="form-control" type="number" name="weight" onChange={this.handleChange} placeholder="Weight..." />
                    <br/><br/>
                    <button class="btn btn-success" onClick={this.handlerUpdateBear}>SUBMIT</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mystate:', state);
    return { bears: state.bears };
}

export default connect(mapStateToProps, { fetchBears, addBear })(BearAdd);
