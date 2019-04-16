import React, { Component } from 'react';
import BearAdd from './bear_add';
import BearShow from './bear_show';
import BearEdit from './bear_edit';
import BearGet from './bear_get'
import '../App.css'

export default class BearIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { name: 'gtfarng', weight: 55 };
        console.log("State: ", this.state)
    }


    editBear = (item) => {
        console.log(item.data.name + item.data.weight);
        this.setState({ name: item.data.name, weight: item.data.weight });
    }

    render() {
        return (
            <div className="container">
                <div className="App">
                    <header className="App-header">
                        <br /> <h1>My-React-App (REST)</h1><br />
                    </header>

                </div>
                <br />
                <BearShow editBear={this.editBear} />
                <br />
                <BearGet />
                <br />  <br />
                <div>
                    <div>
                        <BearAdd />
                    </div>
                    <br /><br />
                    <div>
                        <BearEdit />
                    </div>

                </div>
                <br /><br />
                <header className="App-header">
                    <br /> <h1>Developer by</h1><br />
                    <h5>Name : Mr.Jatupat Pannoi</h5>
                    <h5>ID : 5735512002</h5>
                    <h5>Section : 02</h5>
                </header>
            </div>
        );
    }
}

