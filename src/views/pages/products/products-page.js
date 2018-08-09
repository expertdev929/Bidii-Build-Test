import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loading from '../../components/common/loading';
import ProductsForm from '../../components/products-form';
import ProductsListView from '../../components/products-list-view';
import ProductsGridView from '../../components/products-grid-view';

import { getFilteredProducts } from 'src/products'

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMode: true, // true => List view, false => Grid view
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(mode) {
    this.setState({ viewMode: mode });
  }

  render() {
    return (
      <div className="container">
        <ProductsForm
          changeView={this.changeView}
        />
        {!this.props.products.length ? (
          <Loading 
            loading={this.props.loading}
            message="No data" 
          />
        ) : (
          this.state.viewMode ? (
            <ProductsListView products={this.props.products} />
          ) : (
            <ProductsGridView products={this.props.products} />
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getFilteredProducts(state),
  loading: state.products.loading
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ProductsPage)
);