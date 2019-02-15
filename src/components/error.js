import React from "react"
import PropTypes from "prop-types"
import "../styles/error.scss"

const Error = (props) => (
  <p className = "error">{props.content}</p>
);

export default Error;

Error.propTypes = {
  content: PropTypes.string.isRequired
}