import React, { Component } from "react";
import MainHeading from "../layouts/MainHeading";
import axios from 'axios';
import { 
  MDBTable, 
  MDBTableBody, 
  MDBTableHead, 
  MDBContainer, 
  MDBBtn, 
  MDBModal, 
  MDBModalBody, 
  MDBModalHeader, 
  MDBModalFooter,
  //MDBInput
} from "mdbreact";

class JobCategories extends Component {
// const JobCategories = () => {
  state = {
    modal: false,
    items:[],
    id: '',
    name: '',
    username: '',
    email: ''
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response);
      this.setState({items: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleChange = event => {
    this.setState({ 
      id: event.target.value,
      name: event.target.value,
      username: event.target.value, 
      email: event.target.value  
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      id: this.state.id,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    .then(response => {
      console.log(response);
      console.log(response.data);
    });
  };

  deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <>
        <MainHeading heading="Job Categories" /> 
        <div className="text-end">
          <MDBBtn color="primary" rounded onClick={this.toggle}>Add User</MDBBtn>
        </div>
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            { this.state.items.map((item)=>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <MDBBtn color="primary" rounded>Edit</MDBBtn>&emsp;
                  <MDBBtn rounded color="danger" onClick={this.deletePost(item.id)}>Delete</MDBBtn>
                </td>
              </tr>
            ) } 
          </MDBTableBody>
        </MDBTable>
        <MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Add Record</MDBModalHeader>
          <MDBModalBody>
          <form onSubmit={this.handleSubmit}>  
            <div className="form-group">
              <input type="text" name="id" placeholder="Enter ID" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="name" placeholder="Enter Name" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Enter Email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      </>
    );
  }
}

export default JobCategories;
