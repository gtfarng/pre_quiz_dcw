import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchBears, updateBear} from "../actions/index";

class BearGet extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        
    }

    componentWillReceiveProps(nextProps) {
      
        if (nextProps)
            this.setState( {id: nextProps.id, name: nextProps.name, weight: nextProps.weight} )
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    

    render() {
  
        if ( this.state.name ) {
            return (
                <div >
              
                        <h3 className="head" align="center">Get Bear</h3><br/>
                        <h5 align="center">Name: {this.state.name}, Weight:  {this.state.weight} </h5>
                
                    
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}


function mapStateToProps(state) {
    
    return {id: state.editBear.id, name: state.editBear.name, weight: state.editBear.weight};
}

export default connect(mapStateToProps, {updateBear, fetchBears})(BearGet);