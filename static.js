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
  render() {
        return (
          <div>
            <input type="search" placeholder="Search..." />
          </div>
        );
    }
});

export const ProductTable = React.createClass({
  render() {
      const rows = [];
      let lastCategory = '';
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
  render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan={2}>{category}</th>
        </tr>
      );
  }
});

export const ProductRow = React.createClass({
  render() {
      const product = this.props.product;
      return (
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
  }
});
