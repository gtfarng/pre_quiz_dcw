import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

const URL = 'http://localhost:8003/api/';

export default class Count extends Component {
    constructor(props){
        super(props)
          this.state = {
            counts: [], 
            id: 0, name: '',
            newId: 0, newName: '',
        } 
    }

    componentDidMount() {
        this.getAllCounts() 
    }
    
    getAllCounts() {
        axios.get(`${URL}/countrys`)
            .then(res => {
                    this.setState({counts: res.data})
                    console.log(res.data)
                }
            )
            .catch( (error) => { console.log(error); })
    }

    renderCounts() {
        return this.state.counts.map( (count,index) => {
            if (count !== null )
                return (                
                        <li  key={count.id}>
                            {count.id}. {count.name} &nbsp;&nbsp;
                             <button onClick={() => this.deleteCount(index)}>GET</button> &nbsp; 
                            <button onClick={() => this.deleteCount(index)}>DELETE</button> &nbsp;
                             <button onClick={() => this.deleteCount(index)}>UPDATE</button> &nbsp;  
                        </li>
                )
            return ('')
        })
    }

    deleteCount(id) {       
        axios.delete(`${URL}/countrys/${id}`)
            .then( (res) => {
                console.log('Delete:' + res)
                this.getAllCounts()  
            })
    }

    addCount = (e) => {
            e.preventDefault() 
            axios.post(`${URL}/countrys`,   {                
                name: this.state.name            
            })
                .then( (res) => {
                console.log('Create a new count: ' + res);
                this.getAllCounts()  
            })
    }

    getCount(id) {        
        axios.get(`${URL}/countrys/${id}`)
            .then( (res) => {
                const {name} = res.data
                console.log( res.data)
                this.setState({ newId: id, newName: name })
                console.log(this.state)
            })
    }

    editCount = (e) => {      
        e.preventDefault()  
        axios.put(`${URL}/countrys/${this.state.newId}`, {
                name: this.state.newName
                })
            .then( (response) => {
                console.log('Create a new countrys: ' + response);
                this.getAllCounts()  
            })            
    }    

    handleChange = (e) =>  {
        const {name, value} = e.target 
        this.setState({[name]:value})
    }

    render() {
        return (
            <div align="center">
          
            <header className="App-header">
              <br/>
                <h1>My React App</h1>
                 <h5><span className="spn">Frontend</span> => axios, react-redux, redux, redux-thunk, redux-logger, redux-promise </h5>
                  <h5><span className="spn">Backend</span> => express, cors, router, body-parser</h5>
              <br/>
            </header>

               <br/> <h2>Render Country</h2><br/>
                <ul className="bullet-center">
                    {this.renderCounts()}
                </ul>

               <br/>  <h3>Add Country</h3> <br/>
                <form onSubmit={this.addCount}>
                <input type="text" name="name" placeholder="Enter Country" 
                    value={this.state.name} 
                    onChange={this.handleChange} />
                   
                <button>SUBMIT</button>
                </form>

                 <br/>  <h3>Get Country</h3> <br/>

                 <br/>  <h3>Edit Country</h3> <br/>
                <form onSubmit={this.addCount}>
                <input type="text" name="name" placeholder="Enter Country" 
                    value={this.state.name} 
                    onChange={this.handleChange} />
                   
                <button>SUBMIT</button>
                </form>
                    <br/>
                    <br/>

                  <header className="App-header">
          
                <h3>Developer</h3>
                 <h5>Name: Mr.Jatupat Pannoi</h5>
                  <h5>ID : 5735512002</h5>
                   <h5>Section : 02</h5>
                       
                </header>
            </div>
        );
    }

}

