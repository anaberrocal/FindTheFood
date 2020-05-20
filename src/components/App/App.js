import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../../util/Yelp.js';
import logo from '../assets/findthefood.png';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
   Yelp.search(term, location, sortBy).then(businesses => {
     this.setState( {businesses: businesses});
   });
  } 
  
  render() {
  return (
    <div className="App">
      <div className="header">
      <img className="logo" src={logo}/>
    <h1>FIND<span className="the">THE</span>FOOD</h1>
    </div>
    {<SearchBar searchYelp={this.searchYelp} />}
    {<BusinessList businesses={this.state.businesses} />}
    <div id="footer-container"><footer className="footer">Made with <span>❤️</span> by <a target="_blank" href="https://anaberrocal.com/">Ana Berrocal</a></footer></div>
    </div>
      );
    }
  };


export default App;
