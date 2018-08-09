import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productActions } from 'src/products'
import CheckBox from '../common/checkbox';

import './product-card.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.checkProduct = this.checkProduct.bind(this);
  }

  checkProduct() {
    var p = Object.assign({checked: !this.props.product.checked}, this.props.product);
    p.checked = !p.checked;
    this.props.checkProduct(p);
  }

  render() {
    return (
      <div className="product-card">
        <div className="header">
          <div className="product-select">
            <CheckBox
              onClick={() => this.checkProduct()}
              checked={this.props.product.checked}
            />
          </div>
          <div>
            <img 
              className="product-image"
              // alt="ProductImage"
              src={this.props.product.attributes.image}
            />
          </div>
          <p className="unit-feets">Unit:&nbsp;feets</p>
        </div>
        <div className="footer">
          <div className="row">
            <div className="col product-name">
              {this.props.product.attributes.name}
            </div>
            <div className="col product-code">
              {this.props.product.attributes.code}
            </div>
          </div>
          <div className="row">
            <div className="col product-manufacturer">
              {this.props.product.attributes.manufacturer}
            </div>
            <div className="col product-price">
              GHC{this.props.product.attributes.unit_price}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  checkProduct: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  checkProduct: (payload) => {
    dispatch(productActions.checkProduct(payload));
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ProductCard)
);