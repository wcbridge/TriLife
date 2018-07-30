import React from "react";

const CreateBtn = props => (
  <div class="select is-small">
    <select id="choosie">
      <option>{props.esteem}</option>
      <option className="self_actualization" value='1'>Self Actualization</option>
      <option className="esteem" value='2'>Esteem</option>
      <option className="love" value='3'>Love</option>
    </select>
  </div>
);

export default CreateBtn;