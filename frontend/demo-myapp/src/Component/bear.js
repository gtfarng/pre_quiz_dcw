import React, {Component} from 'react';
import {store, getBears} from "../App";
import {connect} from "react-redux";


class Bear extends Component {

    componentDidMount = () => {
        this.props.getBears()
    }

    renderBear = () => {
        if ( this.props.bears )
            return  this.props.bears.map( (bear,index) =>
                (<li key={index}> {bear.id}. {bear.name} {bear.weight} </li>)
            )
    }

    render() {
        return (
            <div><br/>
                <h5>Render Bears</h5>
                <ul>
                    { this.renderBear()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ( {bears} ) => { return {bears} }

const mapDispatchToProps = (dispatch) => {
    return {
        getBears:  () => store.dispatch(getBears()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bear);