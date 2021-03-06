import React from "react";
import "../DeleteBtn/DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const NotesBtn = props => (
  <span className="icon has-text-info" {...props}>
    <i className="fas fa-info-circle"></i>
  </span>
);

export default NotesBtn;
