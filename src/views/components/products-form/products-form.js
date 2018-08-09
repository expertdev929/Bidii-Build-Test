import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from '../common/search';
import { productActions } from 'src/products'

import './products-form.css';

const filters = [
  {
    name: 'All Products',
    value: ''
  },
  {
    name: 'Active Products',
    value: 'active'
  },
  {
    name: 'Inactive Products',
    value: 'inactive'
  },
  {
    name: 'Uncategorize Products',
    value: 'uncategorized'
  }
];

class ProductsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: filters[0],
      sort: {
        orderBy: 'name',
        orderDir: 'desc'
      }
    }

    this.filterProducts = this.filterProducts.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
    this.activeProducts = this.activeProducts.bind(this);
    this.deleteProducts = this.deleteProducts.bind(this);
  }

  filterProducts(filter) {
    this.setState({ filter });
    this.props.filterProducts(filter.value);
  }

  searchProducts(stateName, value) {
    this.setState({
      [stateName]: value
    });
    this.props.searchProducts(value);
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

  activeProducts(active) {
    this.props.activeProducts(active);
  }

  deleteProducts() {
    this.props.deleteProducts();
  }

  render() {
    return (
      <div className="container products-form">
        <div className="row">
          <div className="col-6 left-side">
            {this.props.checked_count ? (
            <div>
              <div className="dropdown">
                <button className="btn btn-bar dropdown-toggle" type="button" id="dropdownActiveButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mark as
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownActiveButton">
                  <a
                    className="dropdown-item"
                    onClick={() => this.activeProducts(true)}
                  >
                    Active
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => this.activeProducts(false)}
                  >
                    Inactive
                  </a>
                </div>
                <button
                  className="btn btn-bar"
                  onClick={() => this.deleteProducts()}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            ) : (
            <div className="dropdown show">
              <a
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => this.filterProducts(this.state.filter)}
              >
                {this.state.filter.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  className="dropdown-item"
                  onClick={() => this.filterProducts(filters[0])}
                >
                  {filters[0].name}
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterProducts(filters[1])}
                >
                  {filters[1].name}
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterProducts(filters[2])}
                >
                  {filters[2].name}
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterProducts(filters[3])}
                >
                  {filters[3].name}
                </a>
              </div>
            </div>
            )}
          </div>
          <div className="col-6 right-side">
            <button
              className="btn btn-grid"
              onClick={() => this.props.changeView(false)}
            >
              <i className="fas fa-th"></i>
            </button>
            <button
              className="btn btn-list"
              onClick={() => this.props.changeView(true)}
            >
              <i className="fas fa-list"></i>
            </button>
            <div className="dropdown">
              <button className="btn btn-bar" type="button" id="dropdownSortButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bars"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownSortButton">
                <a className="dropdown-item disabled">SORT BY</a>
                <a
                  className="dropdown-item"
                  onClick={() => this.sortProducts('name')}
                >
                  Name
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => this.sortProducts('category')}
                >
                  Category
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => this.sortProducts('manufacturer')}
                >
                  Manufacturer
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => this.sortProducts('created_at')}
                >
                  Created Time
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">
                  <i className="fas fa-upload"></i>&nbsp;&nbsp;&nbsp;Import products
                </a>
                <a className="dropdown-item">
                  <i className="fas fa-download"></i>&nbsp;&nbsp;&nbsp;Export products
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">
                  <i className="fas fa-sync"></i>&nbsp;&nbsp;&nbsp;Refresh
                </a>
              </div>
            </div>
            <button
              className="btn btn-primary btn-new-product"
            >
              New Product
            </button>
            <Search
              className="search-input"
              changeSearch={newState =>
                this.searchProducts('searchText', newState)
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

ProductsForm.propTypes = {
  filterProducts: PropTypes.func.isRequired,
  searchProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  checked_count: state.products.checked_count
});

const mapDispatchToProps = (dispatch) => ({
  filterProducts: (payload) => {
    dispatch(productActions.filterProducts(payload));
  },
  searchProducts: (payload) => {
    dispatch(productActions.searchProducts(payload));
  },
  sortProducts: (payload) => {
    dispatch(productActions.sortProducts(payload));
  },
  activeProducts: (payload) => {
    dispatch(productActions.activeProducts(payload));
  },
  deleteProducts: (payload) => {
    dispatch(productActions.deleteProducts(payload));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsForm)
);