import React from 'react'

export const FilterableProductTable = React.createClass({
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable/>
      </div>
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

export const ProductTable = React.createClass({
  render: function() {
      return (
        <div>
          <ProductCategoryRow/>
          <ProductRow/>
        </div>
     );
  }
});

export const ProductCategoryRow = React.createClass({
  render: function() {
      return (
        <div></div>
      );
  }
});

export const ProductRow = React.createClass({
  render: function() {
      return (
        <div></div>
      );
  }
});
