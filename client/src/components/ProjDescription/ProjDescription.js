import React from "react";
// import "./ProjDescription.css";

const ProjDescription = props => (
  <div className="section_description">
    <p className="">A time budgeting application based on <a className="maslow" href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs" target="_blank" rel="noopener noreferrer">Maslow’s Hierarchy of Needs for Human Development</a>  that  allows  users to take the number of hours they estimate of “free time” for a week and stratifying the provided hours into an appropriate percentage, using this pyramid as a loose outline. </p>
    <br />
    <p>TriLife will calculate the appropriate percentages for for each category and allow users to allocate those hours for each category to a calendar in order to block off time to achieve their goals without overextending themselves. </p>
  </div>
);

export default ProjDescription;

