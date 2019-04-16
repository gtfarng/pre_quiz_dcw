import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchBears, updateBear} from "../actions/index";

class BearEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        // this.state = {name: this.props.name, weight: this.props.weight};
       // console.log("name:" + this.state.name);
    }

    componentWillReceiveProps(nextProps) {
        //console.log('next: ', nextProps);
        if (nextProps)
            this.setState( {id: nextProps.id, name: nextProps.name, weight: nextProps.weight} )
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    handlerUpdateBear = (e) => {
        e.preventDefault();
        this.props.updateBear(this.state.id,
            this.state.name,
            this.state.weight,
            (item) => {
                // console.log('item' + item)
                this.props.fetchBears();
            });
    }

    render() {
        //console.log('yyy', this.state)
        if ( this.state.name ) {
            return (
                <div >
              
                        <h3 className="head" align="center">Edit Bear</h3><br/>
                
                    <form align="center">
                
                       
                            <input className="form-control" type="text" name="name" onChange={this.handleChange}  value={this.state.name} placeholder="Name..." />
                        <br/>          
                            <input className="form-control" type="number" name="weight" onChange={this.handleChange} value={this.state.weight} placeholder="Weight..." />
            <br/><br/>
                        <button class="btn btn-success" onClick={this.handlerUpdateBear}>SUBMIT</button>
                    </form>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}


function mapStateToProps(state) {
    console.log(state.name);
    return {id: state.editBear.id, name: state.editBear.name, weight: state.editBear.weight};
}

export default connect(mapStateToProps, {updateBear, fetchBears})(BearEdit);