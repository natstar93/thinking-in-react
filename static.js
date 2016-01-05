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
      var rows = [];
      var lastCategory = '';
      this.props.products.forEach(function(product){
        if (product.category != lastCategory) {
          rows.push(<ProductCategoryRow key={product.category} category={product.category}/>);
          lastCategory = product.category;
        }
        rows.push(<ProductRow key={product.name} product={product}/>)
      })
      return (
        <table><tbody>{rows}</tbody></table>
     );
  }
});

export const ProductCategoryRow = React.createClass({
  render: function() {
      var category = this.props.category;
      return (
        <tr>{category}</tr>
      );
  }
});

export const ProductRow = React.createClass({
  render: function() {
      var product = this.props.product;
      return (
        <tr>{product.name}</tr>
      );
  }
});
