import React from 'react'

export const FilterableProductTable = React.createClass({
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable products={this.props.products}/>
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
      var categoryRows = [];
      this.props.products.forEach(function(product){
        categoryRows.push(<ProductCategoryRow category={product.category}/>)
      })
      return (
        <div>{categoryRows}</div>
     );
  }
});

export const ProductCategoryRow = React.createClass({
  render: function() {
      var category = this.props.category;
      return (
        <div>{category}</div>
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
