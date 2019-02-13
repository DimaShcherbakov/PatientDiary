import React from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../styles/register.scss";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.formHandler = this.formHandler.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.checkPas = this.checkPas.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.state = {
      firstName: "",
      secondName: "",
      thirdName: "",
      brthDay: "",
      position: "",
      telephone: "",
      email: "",
      image: "",
      pas1: "",
      pas2: "",
      truePas: false
    };
  }
  checkPas() {
    if (this.state.pas1 === this.state.pas2) {
      this.setState({ truePas: true });
    } else {
      console.log("Wrong password");
    }
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  formHandler(e) {
    e.preventDefault();
    this.checkPas();
    console.log(this.state);
  }
  uploadImage(e) {
    const files = e.target.files;
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    console.log(formData.get('file'));
    // axios.post('http://localhost:5000/upload', {
    //   body:formData
    // }, {'Content-Type': "multipart/form-data" });
  }
  render() {
    if (this.state.truePas) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form
          action="http://localhost:5000/upload"
        >
          <h2>Регистрация</h2>
          <div className="main-info">
            <label className="avatar">
              <div className="plus">
                <input
                  type="file"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={this.uploadImage}
                />
              </div>
            </label>
            <div className="person-data">
              <label htmlFor="">Фамилия</label>
              <input
                type="text"
                name="secondName"
                value={this.state.secondName}
                onChange={this.handleUserInput}
              />
              <label htmlFor="">Имя</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleUserInput}
              />
              <label htmlFor="">Отчество</label>
              <input
                type="text"
                name="thirdName"
                value={this.state.thirdName}
                onChange={this.handleUserInput}
              />
            </div>
          </div>
          <label htmlFor="">Дата рождения</label>
          <input
            type="date"
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            name="brthDay"
            value={this.state.brthDay}
            onChange={this.handleUserInput}
          />
          <label htmlFor="">Должность</label>
          <input
            type="text"
            name="position"
            value={this.state.position}
            onChange={this.handleUserInput}
          />
          <div className="contact-wrap">
            <div>
              <label htmlFor="">Телефон</label>
              <br />
              <input
                type="tel"
                name="telephone"
                value={this.state.telephone}
                onChange={this.handleUserInput}
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
            </div>
          </div>
          <div className="pas-wrap">
            <div>
              <label htmlFor="">Пароль</label>
              <br />
              <input
                type="password"
                name="pas1"
                value={this.state.pas1}
                onChange={this.handleUserInput}
              />
            </div>
            <div>
              <label htmlFor="">Повторите пароль</label>
              <br />
              <input
                type="password"
                name="pas2"
                value={this.state.pas2}
                onChange={this.handleUserInput}
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="btn"
            onClick={this.formHandler}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
