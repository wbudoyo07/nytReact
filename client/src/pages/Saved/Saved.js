import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron"
import "./Saved.css";

class Saved extends Component {
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
         <div>
             {/* this is like if statement. if we find something inside the nytarciels then iterate it else print something */}
             {this.state.articles.length ? (
                 <div> 
                     {this.state.articles.map(article => (
                         <h1>{article.title}</h1>
                     ))}
                 </div>
             ): (<h1> There's no Articles </h1>)}
         </div>
            </div>
        );
    }
}

export default Saved;
