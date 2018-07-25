import React from "react";

export const Input = props => (
  <div className="field has-addons">
    <div className="control">
      <input className="input input_field" type="text" placeholder="Free time goes here" {...props} />
    </div>
    <div className="control">
      <button className="button is-primary">
        Submit
      </button>
    </div>
</div>
);
