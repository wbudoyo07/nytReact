import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron"
import Form from "../../components/Form";
import "./Home.css";

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: "",
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles()
        .then(res => 
            this.setState(
                {
                    articles: res.data,
                    title: "",
                    data: "",
                    url: ""
                }
                ))
                .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
         <Jumbotron />
         <Form />
            </div>
        );
    }
}

export default Articles;
