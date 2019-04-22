import React, { Component } from 'react'
//import axios from "axios"
import { store } from "./App"
import { connect } from "react-redux"
import { getBears } from "./actions"

class Bear extends Component {

    // state = { bears: ''}

    // componentDidMount = () => {
    //     axios.get('http://localhost/api/bears')
    //         .then( (res) => {
    //             console.log(res.data)
    //             this.setState({bears: res.data })
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // componentDidMount = async() => {
    //     const bears = await axios.get('http://localhost/api/bears')
    //     console.log(bears)
    //     this.setState({bears: bears.data })
    // }

    componentDidMount = () => {
        this.props.getBears()
    }


    renderBear = () => {
        if (this.props.bears)
            return this.props.bears.map((bear, index) =>
                (
                    <li class='app' key={index}> {bear.id} {bear.name} {bear.weight} </li>
                )
            )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderBear()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ bears }) => { return { bears } }

const mapDispatchToProps = (dispatch) => {
    return {
        getBears: () => store.dispatch(getBears()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bear);