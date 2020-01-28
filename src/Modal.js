import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      image: "",
      rating: "",
      year: ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  handelChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };
  addNewMovie =()=>{
      this.props.add(this.state)
  } 
  render() {
    return (
      <div  className="list-item" >
       
        <Button className="plus" variant="primary" onClick={this.handleShow}>
          +
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  onChange={this.handelChange}
                  value={this.state.value}
                />
              </div>
              <div>
                <label>Image:</label>
                <input
                  type="text"
                  name="image"
                  value={this.state.value}
                  onChange={this.handelChange}
                />
              </div>
              <div>
                <label>Rating:</label>
                <input
                  type="text"
                  name="rating"
                  value={this.state.value}
                  onChange={this.handelChange}
                />
              </div>
              <div>
                <label>Year:</label>
                <input
                  type="text"
                  name="year"
                  value={this.state.value}
                  onChange={this.handelChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addNewMovie}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
