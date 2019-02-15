import React from "react";
import Card from "./Card";
import RegPatient from "./RegPatient"
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab"
import InputBase from "@material-ui/core/InputBase";
import "../styles/wrapperData.scss";

class WrapperData extends React.Component{
  render(){
    return(
      <div className = "wrapper-data">
        <div className = "nav-panel">
          <div className ="btns">
            <Button variant="contained" 
                    color = "primary">
              От А до Я
            </Button>
            <Button variant="contained" 
                    color = "default">
              От Я до А
            </Button>
            <Button variant="contained" 
                    color = "primary">
              По дате добавления
            </Button>
            <div className="search">
                <div className= "searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  className = ""
                />
            </div>
          </div>
          <Fab color="primary" aria-label="Add" className = "add-pers">
            <AddIcon />
          </Fab>
        </div>
        <div className = "wrap-cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <RegPatient/>
      </div>
    )
  }
}
export default WrapperData;