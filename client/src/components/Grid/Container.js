import React from "react";

export const Container = ({ fluid, children, props }) => (
  <div className={`container${fluid ? "-fluid" : ""}`} {...props}>
    {children}
  </div>
);
