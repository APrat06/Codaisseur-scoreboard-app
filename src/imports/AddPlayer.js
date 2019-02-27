import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddPlayer.css';

export default class AddPlayer extends Component {

    static propTypes = {
        addPlayer: PropTypes.func.isRequired
    }

    state = {name:'', msg:'', disabled:false}

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(this.state.name);
        this.setState({name: ''})
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
        if(event.target.value.length < 3){
            this.setState({msg: 'name must be at least 3 characters long'})
            this.setState({disabled: true})
        } else {
            this.setState({msg: ''})
            this.setState({disabled: false})
        }
    }
    
    render() {
        return (
        <div className="add-player">
            <div>
                <p>{this.state.msg}</p>
            </div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
            </label>
            <input type="submit" value="Add" disabled={this.state.disabled}/>
        </form>
      </div>
    )
  }
}