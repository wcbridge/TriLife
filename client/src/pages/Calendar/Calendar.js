import React, { Component } from "react";
import WelcomeUser from "../../components/WelcomeUser";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import CalendarContainer from "../../components/CalendarContainer";
import { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } from "../../components/WeeklyCalendar";



class Calendar extends Component {

  render() {
    return (
      <Container fluid>
        <WelcomeUser>
          <h1>Drag and drop categories into the calendar!</h1>
        </WelcomeUser>
        <CalendarContainer>
          <Sunday />
          <Monday />
          <Tuesday />
          <Wednesday />
          <Thursday />
          <Friday />
          <Saturday />
        </CalendarContainer>
      </Container>
    );
  }
}

export default Calendar;