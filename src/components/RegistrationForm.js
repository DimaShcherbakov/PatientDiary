import React from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Error from "./error"
import axios from "axios";
import "../styles/register.scss";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.formHandler = this.formHandler.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.checkPas = this.checkPas.bind(this);
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
      formErrors: {
        pasError: "Пароли не совпадают",
        emailError: "Проверьте email",
      },
      formErr: false
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
    if (this.state.pas1 === this.state.pas2){
      axios.post('http://localhost:5000/register', {
        firstName: this.state.firstName,
        secondName: this.state.secondName,
        thirdName: this.state.thirdName,
        brthDay: this.state.brthDay,
        position: this.state.position,
        telephone: this.state.telephone,
        email: this.state.email,
        pas: this.state.pas1,
        photo: this.state.image
      }).then(res => {
        if (res.message) {
          console.log("User is already existed")
        } else {
          console.log("user was added")
        }
      })
    }
  }
  render() {
    if (this.state.truePas) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form>
          <h2>Регистрация</h2>
          <div className="main-info">
            <label className="avatar">
              <div className="plus">
                <input
                  type="file"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={this.handleUserInput}
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
                required
              />
              <label htmlFor="">Имя</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleUserInput}
                required
              />
              <label htmlFor="">Отчество</label>
              <input
                type="text"
                name="thirdName"
                value={this.state.thirdName}
                onChange={this.handleUserInput}
                required
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
            required
          />
          <label htmlFor="">Должность</label>
          <input
            type="text"
            name="position"
            value={this.state.position}
            onChange={this.handleUserInput}
            required
          />
          <div className="contact-wrap">
            <div>
              <label htmlFor="">Телефон</label>
              <br />
              <input
                type="tel"
                name="telephone"
                pattern = "[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                minlength="19" maxlength="19"
                value={this.state.telephone}
                onChange={this.handleUserInput}
                required
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
                required
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
                required
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
                required
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
