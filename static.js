import React from 'react'

export const FilterableProductTable = React.createClass({
  render() {
    return (
      <div><SearchBar/></div>
    );
  }
});

export const SearchBar = React.createClass({
  render: function() {
        return (
          <div>
            <input type="search" placeholder="Search..." />
          </div>
        );
    }
});
