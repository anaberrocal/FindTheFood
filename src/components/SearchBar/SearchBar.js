import React from 'react';
import './SearchBar.css';



  class SearchBar extends React.Component {
    constructor(props){
     super(props);
     this.state = {
       term: '',
       location: '',
       sortBy: 'best_match'
     };

     this.handleTermChange = this.handleTermChange.bind(this);
     this.handleLocationChange = this.handleLocationChange.bind(this);
     this.handleSearch = this.handleSearch.bind(this);

     this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
     };

    }

    getSortByClass(sortByOption) {
      if(this.state.sortBy === sortByOption) {
        return 'active';
      } 
        return '';
      }

    handleSortByChange(sortByOption) {
      this.props.searchYelp(this.state.term, this.state.location, sortByOption);
      this.setState( {
        sortBy: sortByOption,
       });

    }

    handleTermChange(event) {
      this.setState( {
        term: event.target.value,
      });
    };

    handleLocationChange(event) {
      this.setState( {
        location: event.target.value,
      });
    };

    handleSearch(event){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      event.preventDefault(); 
    };

    handleSearchEnter = (event) => {
      if (event.key === "Enter") {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
      }
    }

renderSortByOptions() {
 return Object.keys(this.sortByOptions).map(sortByOption => {
let sortByOptionValue = this.sortByOptions[sortByOption];
 return (<li key={sortByOptionValue} 
            className={this.getSortByClass(sortByOptionValue)} 
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}
 </li>);
});
}

render() {
    return (
    <div className="SearchBar" onKeyPress={this.handleSearchEnter}>
    <div className="SearchBar-sort-options">
      <ul>
        {this.renderSortByOptions()}
      </ul>
    </div>
    <div className="SearchBar-fields">
      <input placeholder="Search Businesses" onChange={this.handleTermChange} />
      <input placeholder="Where?" onChange={this.handleLocationChange} />
    </div>
    <div className="SearchBar-submit">
      <a onClick= {this.handleSearch} href="foo" >Let's Go</a>
    </div>
  </div> 
    );
   }
  }

  export default SearchBar;