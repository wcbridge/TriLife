import React, { Component } from "react";
import { Container } from "../../components/Grid";
import WelcomeUser from "../../components/WelcomeUser";
import ProjDescription from "../../components/ProjDescription";
import BoxContainer from "../../components/BoxContainer";

class About extends Component {

  render() {
    return (
      <Container fluid>
        <WelcomeUser>
          <h1 className="welcome_about">Learn about us!</h1>
        </WelcomeUser>
        <BoxContainer>
          <img className="hierarchy" src={require("../../Images/Maslows.png")} alt="Maslow" />
          <ProjDescription />
        </BoxContainer>
      </Container>
    );
  }
}

export default About;