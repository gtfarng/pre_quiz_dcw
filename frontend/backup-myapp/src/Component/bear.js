import React, { Component } from 'react';
import { store, getBears } from "../App";
import { connect } from "react-redux";


class Bear extends Component {

    componentDidMount = () => {
        this.props.getBears()
    }

    renderBear = () => {
        if (this.props.bears)
            return this.props.bears.map((bear, index) =>
                (<li key={index} className="bullet-center"> {bear.id}. {bear.name} {bear.weight}
                    &nbsp;&nbsp;
                <button onClick={() => this}>GET</button>
                    &nbsp; &nbsp;
                <button onClick={() => this}>DELETE</button>
                    &nbsp; &nbsp;
                <button onClick={() => this}>EDIT</button>
                    <br /> </li>)
            )
    }

    render() {
        return (
            <div><br />
                <h5>Render Bears</h5>
                <ul>
                    {this.renderBear()}
                </ul>
                <br />
                <div>
                    <h5>Add Bear</h5>

                    <form align="center">

                        <input type="text" name="name" onChange={this} placeholder="Name..." /> &nbsp; &nbsp;
                        <input type="number" name="weight" onChange={this} placeholder="Weight..." />
                        <br /><br />
                        <button onClick={this}>ADD</button>
                    </form>
                </div>
                <br />
                <div>
                    <h5>Update Bear</h5>

                    <form align="center">

                        <input type="text" name="name" onChange={this} placeholder="Name..." /> &nbsp; &nbsp;
                        <input type="number" name="weight" onChange={this} placeholder="Weight..." />
                        <br /><br />
                        <button onClick={this}>UPDATE</button>
                    </form>
                </div>

<br/><br/><br/><br/>
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