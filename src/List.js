import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  render() {
    return (
      <div className="list-item">
        {this.props.movies.map(el => (
          <Card movie={el} />
        ))}
      </div>
    );
  }
}

export default List;
