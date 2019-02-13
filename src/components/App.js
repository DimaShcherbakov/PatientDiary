import React, { Component } from "react";
import Form from './Form'
import Main from './Main'
import RegistrationForm from './RegistrationForm'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <Switch>
              <Route exact path ="/" component ={Form}/>
              <Route path="/register" component={RegistrationForm}/>
              <Route path="/main" component={Main}/>
            </Switch>
          </div>
        </MuiThemeProvider> 
      </BrowserRouter>
    );
  }
}

export default App;
