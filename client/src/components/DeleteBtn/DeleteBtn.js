import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span class="icon has-text-danger" {...props}>
    <i class="fas fa-ban"></i>
  </span>
);

export default DeleteBtn;
