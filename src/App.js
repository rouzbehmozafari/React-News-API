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
    articles: json.articles 
  })) 
} 
change = ()=> {
  let land = document.getElementById('land').value
  var selectedLand = 'https://newsapi.org/v2/top-headlines?' +
  'country='+ land +'&' +
  'apiKey=a939f33eb3d94a36acd4ccb59fdc33a9';
  // this.setState({isLoaded: true})
  // this.setState({url: selectedLand})
  fetch(selectedLand)
  .then(response => response.json())
  .then(json => this.setState({
    articles: json.articles 
  }))

}

  render() { 
      return ( 
      <div className="App">
          <div>
            <select onChange={this.change} name="land" id="land">
              <option value="us">us</option>
              <option value="de">de</option>
              <option value="gb">gb</option>
              <option value="gb">fr</option>
              <option value="gb">pl</option>
            </select>
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
