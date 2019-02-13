import React from "react"
import "../styles/error.scss"

const Error = (props) => (
  <p className = "error">{props.content}</p>
);

export default Error;
