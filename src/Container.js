import React, { Component } from "react";
import AddModal from "./Modal";
import List from "./List";
import Search from "./Search";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          show: false,
          title: "Alladin",
          image:
            "https://1.bp.blogspot.com/-KygwRc2-ctA/XRsMga6_QVI/AAAAAAAAAII/Tr2mLaX2s5c34qRk8NVRoRHfzmOqKkL8ACLcBGAs/s640/aladin3.jpg",
          rating: "5",
          year: "2019"
        },
        {
          show: false,
          title: "Terminator Alladine",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQesKEBQO0HTjVppceJtuTUgUxHyoi7C8WV7rdA_fUGm4fkeEqs",
          rating: "3",
          year: "2019"
        }
      ],
      key: "",
      r: 1
    };
  }
  search = x => {
    this.setState({ key: x });
  };
  searchR = x => {this.setState({ r:x})};

  add = movie => {
    this.setState({
      movies: this.state.movies.concat(movie)
    });
  };
  render() {
    return (
      <div className="galerie">
        <Search
          movies={this.state.movies}
          sh={x => this.search(x)}
          rate={x => this.searchR(x)}
          ret={this.state.r}
        />
        {(this.state.key || this.state.r) ? (
          <List
            movies={this.state.movies.filter(
              el => (
                el.title
                  .toUpperCase()
                  .indexOf(this.state.key.toUpperCase().trim()) >= "") && (el.rating>=this.state.r))}
          />
        ) : (
          <List movies={this.state.movies} />
        )}
        <AddModal add={m => this.add(m)} />
      </div>
    );
  }
}

export default Container;
