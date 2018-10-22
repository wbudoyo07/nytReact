import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron"
import Form from "../../components/Form";
import Results from "../../components/Results";
import "./Home.css";

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: "",
    };

    handleFormSubmit = event => {
        event.prevent.Default();
       
    };

    render() {
        return (
            <div>
         <Jumbotron 
         value = {this.state.title}
         onChange = {this.handleInputChange}
         />
         <Form />
         <br/>
         <Results />
            </div>
        );
    }
}

export default Articles;
