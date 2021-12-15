import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      // url : 'http://newsapi.org/v2/everything?' +
      // 'q=Apple&' +
      // 'from=2021-12-15&' +
      // 'sortBy=popularity&' +
      // 'apiKey=a939f33eb3d94a36acd4ccb59fdc33a9' ,
      url: 'https://jsonplaceholder.typicode.com/posts',
      isLoaded : false,
      articles  : []
     }
  }
componentDidMount(){
  // var req = new Request(this.state.url);
  var req = this.state.url
  fetch(req)
  .then(response => response.json())
  .then(json => this.setState({
    articles: json ,
    isLoaded : true
  }))
} 

  render() { 
      return ( 
      <div className="App">
          <div>
            <h1>News</h1>
              {/* if (this.state.isLoaded)  */}
              {

                this.state.articles.map((a) =>
                    <NewsItem 
                      key = {uuidv4()}
                      // urlToImage = {a.urlToImage}
                      title = {a.title}
                      // description = {a.body}
                      // publishedAt = {a.publishedAt}
                      // url = {a.url}
                    />
                  )
              }
          </div>
  </div> );
    }
  }
export default App;
