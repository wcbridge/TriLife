import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="icon has-text-danger" {...props}>
    <i className="fas fa-ban"></i>
  </span>
);

export default DeleteBtn;
