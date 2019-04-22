import React, { Component } from 'react'
import { connect } from "react-redux"
import './App.css'
import { getBears } from "./actions"
import { addbear, updateBear, deleteBear } from "./actions"
import { store } from './App'

class crudBear extends Component {
    componentDidMount = () => {
        this.props.getBears()
    }

    state = { bearState: '' }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    // addbear = () => {
    //     this.handleChange()
    //     axios.post(`http://localhost/api/bears`)
    //     this.componentDidMount()
    //     console.log('SS'+this.state.bearState.bearname);

    // }
    // delbear = () => {
    //     axios.delete(`http://localhost/api/bears/`)
    // }


    render() {
        return (
            <div class='app'>
                <h1>CRUD Bear</h1>
                <div className='container'>
                    <table class="table">
                        <tbody>
                            <tr><div class="input-group">
                                <th scope="col"><div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">ID:</span>
                                </div></th>
                                <th scope="col"><input name="id" placeholder='Delete' value={this.props.id} onChange={this.handleChange} /></th>
                            </div></tr>

                            <tr><div class="input-group">
                                <th scope="col"><div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Bear:</span>
                                </div></th>
                                <th scope="col"><input type='text' name="bearname" placeholder='Name' value={this.props.bearname} onChange={this.handleChange} /></th>
                            </div></tr>

                            <tr><div class="input-group">
                                <th scope="col"><div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Weight:</span>
                                </div></th>
                                <th scope="col"><input type='number' name="weight" value={this.props.weight} onChange={this.handleChange} /><br /></th>
                            </div></tr>
                        </tbody>
                    </table>
                </div>

                <button id='bt' class="btn btn-primary" onClick={() => store.dispatch(addbear(this.state.bearname, this.state.weight))}>Add</button>
                <button id='bt' class="btn btn-success" onClick={() => store.dispatch(updateBear(this.state.id, this.state.bearname, this.state.weight))}>Update</button>
                <button id='bt' class="btn btn-danger" onClick={() => store.dispatch(deleteBear(this.state.id))}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = ({ bears }) => { return { bears } }

const mapDispatchToProps = (dispatch) => {
    return {
        addbear: () => dispatch(addbear()),
        getBears: () => store.dispatch(getBears()),
        updateBear: () => dispatch(updateBear()),
        deleteBear: () => dispatch(deleteBear()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(crudBear)