import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import Header from '../components/common/header';
import ProductsPage from '../pages/products';

import { productActions } from 'src/products'

class App extends React.Component {
  componentWillMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Route exact path="/" component={ProductsPage} />
        </main>
      </div>
    )
  }
}

App.propTypes = {
  loadProducts: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loadProducts: (payload) => {
    dispatch(productActions.loadProducts(payload))
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);