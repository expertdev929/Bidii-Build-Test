import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productActions } from 'src/products'
import CheckBox from '../common/checkbox';

import './products-list-view.css';

class ProductsListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: {
        orderBy: 'name',
        orderDir: 'desc'
      }
    }

    this.sortProducts = this.sortProducts.bind(this);
    this.checkAllProducts = this.checkAllProducts.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
  }

  sortProducts(orderBy) {
    var sort = Object.assign({}, this.state.sort);
    
    if (orderBy === this.state.sort.orderBy) {
      if (this.state.sort.orderDir === 'desc') {
        sort.orderDir = 'asc';
      } else {
        sort.orderDir = 'desc';
      }
    } else {
      sort.orderBy = orderBy;
    }

    this.setState({ sort });
    this.props.sortProducts(sort);
  }

  checkAllProducts() {
    this.props.products.forEach(product => {
      product.checked = !product.checked;
      this.props.checkProduct(product);
    });
  }

  checkProduct(product) {
    var p = Object.assign({checked: !product.checked}, product);
    p.checked = !p.checked;
    this.props.checkProduct(p);
  }

  render() {
    return (
      <table className="table table-products">
        <thead>
          <tr>
            <th scope="col">
              <CheckBox
                onClick={() => this.checkAllProducts()}
                checked={(this.props.products.filter(product => {
                  return !product.checked
                }).length) === 0}
              />
            </th>
            <th scope="col"
                onClick={() => this.sortProducts('name')}
            >
              NAME&nbsp;<i className="fas fa-sort"></i>
            </th>
            <th scope="col">CODE</th>
            <th scope="col">UNIT PRICE</th>
            <th scope="col">MANUFACTURER</th>
            <th scope="col">UOM</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">REORDER LEVEL</th>
            <th scope="col">STATUS</th>
            <th scope="col" className="dropdown">
              <button className="btn btn-cog" type="button">
                <i className="fas fa-cog"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => {
            return (
            <tr key={product.id}>
              <th scope="row">
                <CheckBox
                  onClick={() => this.checkProduct(product)}
                  checked={product.checked}
                />
              </th>
              <td>
                <img 
                  src={product.attributes.image}
                  // alt="ProductImage"
                />
                {product.attributes.name}
              </td>
              <td>{product.attributes.code}</td>
              <td>{product.attributes.unit_price}</td>
              <td>{product.attributes.manufacturer}</td>
              <td>{product.attributes.uom}</td>
              <td>{product.attributes.category}</td>
              <td>{product.attributes.reorder_level}</td>
              <td>
                {product.attributes.is_active ? (
                  <button className="btn btn-primary btn-active">
                    Active
                  </button>
                ) : (
                  <button className="btn btn-secondary btn-active">
                    Inactive
                  </button>
                )}
              </td>
              <td></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

ProductsListView.propTypes = {
  sortProducts: PropTypes.func.isRequired,
  checkProduct: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  sortProducts: (payload) => {
    dispatch(productActions.sortProducts(payload));
  },
  checkProduct: (payload) => {
    dispatch(productActions.checkProduct(payload));
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ProductsListView)
);