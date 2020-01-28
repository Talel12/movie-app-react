import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  change = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    let startab = [];
    for (let i = 0; i < 5; i++) {
        if(i < this.props.ret){
      startab.push(
        <li><i className="fas fa-star" onClick={() => this.props.rate(i+1)}></i>
        </li>
      );}else{
        startab.push(
          <li><i className="far fa-star" onClick={() => this.props.rate(i+1)}></i>
          </li>
        );}

    }
    return (
      <div className="nav">
        <input
          type="text"
          placeholder="Type movie name to search"
          className="search"
          maxLength="50"
          onChange={e => this.props.sh(e.target.value)}
        ></input>
        <div className="serRat">
          <h6>Minimum rating</h6>
          <ul>{startab}</ul>
        </div>
      </div>
    );
  }
}
export default Search;
