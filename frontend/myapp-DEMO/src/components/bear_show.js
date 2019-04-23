import React, { Component } from 'react';
import { fetchBears } from '../actions';
import _ from 'lodash';
import { connect } from 'react-redux';
import { deleteBear, getBear } from "../actions/index";
import '../App.css'


class BearShow extends Component {

    componentDidMount() {
        this.props.fetchBears()
    }

    getBear(id) {
        this.props.getBear(id, (item) => {
            this.props.editBear(item);
            // this.props.fetchBears()
        }
        );
    }

    deleteBear(id) {
        this.props.deleteBear(id, (item) => {
            console.log('item' + item)
            this.props.fetchBears();
        });

    }

    renderBears() {
        return _.map(this.props.bears, bear => {
            if (bear !== null) {
                return (
                    <h5>
                        <li className="bullet" key={bear.id}>
                            {bear.id }.Name: <small>{bear.name}</small>, Weight: <small>{bear.weight}</small>&nbsp;&nbsp;
                            <button class="btn btn-primary" onClick={() => this.getBear(bear.id)}>GET</button>
                            &nbsp; &nbsp;
                            <button className="btn btn-danger" onClick={() => this.deleteBear(bear.id)}>DELETE</button>
                            &nbsp; &nbsp;
                            <button className="btn btn-warning" onClick={() => this.getBear(bear.id)}>EDIT</button>
                            <br />
                        </li>
                    </h5>
                )
            }
            else {
                return ('')
            }

        })
    }


    // ===================  view ==================
    render() {
        return (
            <div>
                <br />
                <h1 className="head" align="center">Bears Profile</h1>
                <br />

                <section>
                    <ul className="list-group">
                        {this.renderBears()}
                    </ul>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return { bears: state.bears };
}

export default connect(mapStateToProps,
    { deleteBear, getBear, fetchBears })(BearShow);