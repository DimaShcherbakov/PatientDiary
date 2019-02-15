import React from "react"
import RegistrationForm from "./RegistrationForm"

class RegPatient extends React.Component{
  render(){
    return (
      <div className = "registr-popup">
        <RegistrationForm/>
      </div>
    )
  }
}

export default RegPatient