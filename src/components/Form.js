import React from "react";
import {Button} from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';
import validateEmail from '../utils/validateEmail';
import Error from "./error";
import axios from 'axios';
import "../styles/form.scss";

class Form extends React.Component {
  
  constructor(props){
    super(props)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.state = {
      email: '',
      password: '',
      formErrors: {
        email: 'Неверная почта',
        password: 'Неверный пароль',
        unRegistered: 'Проверьте логин и пароль'
      },
      emailValid: true,
      authorised: false
    }
  }
  
  handleUserInput(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    if (this.state.email !== '' && this.state.password === '') {
      this.setState({emailValid: false});
      if(validateEmail(value)) {
        this.setState({emailValid: true});
      }
    }
  }
  userEnter(e){
    e.preventDefault()
    if (this.state.email != '' && this.state.password != '') {
      axios.post(`http://localhost:5000/login/`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token)
        localStorage['token'] = res.data.token
        this.setState({
          email: '',
          password: '',
          authorised: true
        })
      })
      .catch(err => console.log(err))
    } 
  }
  render() {
    const { emailValid } = this.state;
    const { formErrors } = this.state;
    const { authorised } = this.state;
    console.log(emailValid)
    if (authorised) {
      return (
        <Redirect to ="/main"/>
      )
    }
    return (
      <div className = "form">
        <h1>Enter</h1>
        <label htmlFor="email">Enter your @mail</label>
        <input type="email" 
                name="email" 
                id="email" 
                placeholder ="abcdej@mail.ru"
                value={this.state.email}
                onChange={this.handleUserInput}
        />
        {emailValid ? '' : <Error content = {formErrors.email}/>}  
        <label htmlFor="password">Enter your password</label>
        <input type="password" name="password" 
              id="password" 
              placeholder = "jhvdofuqwy3"
              value={this.state.password}
              onChange={this.handleUserInput}
        />
        <Button variant="contained" color="primary" className ="btn" onClick = {this.userEnter.bind(this)}>
          Enter
        </Button>
        <p className = "links">
          <Link to='/password'>Забыли пароль?</Link>
          <span> | </span>  
          <Link to='/register'>Регистрация</Link>
        </p>
      </div>
    )
  }
}
export default Form;
