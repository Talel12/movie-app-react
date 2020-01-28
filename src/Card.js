import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let startab = [];
    for (let i = 0; i < 5; i++) {
      if (i < this.props.movie.rating) {
        startab.push(
          <li>
            <i className="fas fa-star"></i>
          </li>
        );
      } else {
        startab.push(
          <li>
            <i className="far fa-star"></i>
          </li>
        );
      }
    }
    return (
      <div className="carte">
        <img className="carteImg" alt="img" src={this.props.movie.image} />
        <p><strong>{this.props.movie.title}</strong></p>
        <ul className="topRate">{startab}</ul>
        <p>{this.props.movie.year}</p>
      </div>
    );
  }
}

export default Card;
