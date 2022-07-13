import React, { Component } from 'react';
import '../css/Pokecard.css';

const pokeApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let zeroAdder = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${pokeApi}${zeroAdder(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt="" />
        <p className="pokecard-data" key={this.props.id}>
          Type: {this.props.type}
        </p>
        <p className="pokecard-data">Exp: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
