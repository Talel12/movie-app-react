import React, {Component} from 'react';
import './App.css';
import Container from './Container';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      movieList:[]
    }
  }

  // add = movie =>{
  //   this.setState({
  //     movieList:this.state.contact(movie)
  //   })
  // }
  
  render() {
    return(
    <div className="App">
      <Container  />
    </div>)
  };
}

export default App;
