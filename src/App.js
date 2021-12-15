import NewsItem from './NewsItem';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      url : 'http://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2021-12-15&' +
      'sortBy=popularity&' +
      'apiKey=6ddd575efb6d48d9a544c261a9feb2d5' ,
      // url: 'https://jsonplaceholder.typicode.com/posts',
      isLoaded : false,
      articles  : []
     }
  }
componentDidMount(){
  var req = new Request(this.state.url);
  // var req = this.state.url
  fetch(req)
  .then(response => response.json())
  .then(json => this.setState({
    articles: json.articles ,
    isLoaded : true
  }))
} 

  render() { 
      return ( 
      <div className="App">
          <div>
            <h1>News</h1>
            <div className="newsC">
                            {

                this.state.articles.map((a) =>
                    <NewsItem 
                      key = {uuidv4()}
                      urlToImage = {a.urlToImage}
                      title = {a.title}
                      description = {a.body}
                      publishedAt = {a.publishedAt}
                      url = {a.url}
                    />
                  )
                }
            </div>
          </div>
  </div> );
    }
  }
export default App;
