import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import WelcomeUser from "../../components/WelcomeUser";
import BoxContainer from "../../components/BoxContainer";
import { Input, TextArea } from "../../components/Form";
import Category from "../../components/Category";
import CategoryContainer from "../../components/Category/CategoryContainer";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";

class AddTime extends Component {
  state = {
    hours: [],
    free: "",
    selfA: "",
    esteem:"",
    love:"",
    synopsis: ""
  };

  componentDidMount() {
    this.loadHours();
  }

  loadHours = () => {
    API.getHours()
      .then(res =>
        this.setState({ hours: res.data, free: "", selfA: "",esteem: "",love:"", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteHour = id => {
    API.deleteHour(id)
      .then(res => this.loadHours())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTime = event => {
    const {name, value} = event.target;
    this.setState({
      
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.free)
    // && this.state.selfA) 
    {
      API.saveHour({
        free: this.state.free,
        selfA: this.state.free*.1,
        esteem: this.state.free*.3,
        love: this.state.free*.6,

        synopsis: this.state.synopsis
      })
        .then(res => this.loadHours())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <WelcomeUser>
          <h1>Input your free time UserName</h1>
        </WelcomeUser>
        <BoxContainer>
          <Input 
            value={this.state.free}
            onChange={this.handleInputChange}
            name="free"
          />
          <TextArea 
            value={this.state.synopsis}
            onChange={this.handleInputChange}
            name="synopsis"
          />
          <CategoryContainer>
            <Category />
            {this.state.hours.length ? (
            <List>
              {this.state.hours.map(hour => (
              <ListItem key={hour._id}>
                <p>
                {hour.free} hrs
                </p>
                <p>
                {hour.selfA} hrs
                </p>
                <p>
                {hour.esteem} hrs
                </p>
                {hour.love} hrs
               <DeleteBtn onClick={() => this.deleteHour(hour._id)} />
              </ListItem>
            ))}
            </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </CategoryContainer>
        </BoxContainer>
      </Container>
    );
  }
}

export default AddTime;