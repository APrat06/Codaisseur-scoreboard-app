import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.css';
import ScoreAdjustButton from './ScoreAdjustButtons';
import DeleteButton from './DeleteButton';

export default class Player extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
  }

  handleOnClick = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score + 1)
  }

  decrement = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score - 1)
  }

  handleDelete = () => {
    this.props.removePlayer(this.props.id)
  }

  render() {
    return (
      <li className="player">
        <p className="name">{ this.props.name }</p>
        <p className="score">{ this.props.score }</p>
        <ScoreAdjustButton onPlus={this.handleOnClick} onMinus={this.decrement}/>
        <DeleteButton onClick={this.handleDelete}/>
      </li>
    )
  }
}