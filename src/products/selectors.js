import { createSelector } from 'reselect';
import _ from 'lodash';

export function getProducts(state) {
  return state.products;
}

export function getProductFilter(state) {
  return getProducts(state).filter;
}

export function getProductSearch(state) {
  return getProducts(state).search;
}

export function getProductSort(state) {
  return getProducts(state).sort;
}

export function getProductList(state) {
  return getProducts(state).list;
}

export function searchFilter(product, value) {
  value = value.toLowerCase();
  return (
    (product.attributes.name && product.attributes.name.toLowerCase().includes(value)) ||
    (product.attributes.category && product.attributes.category.toLowerCase().includes(value)) ||
    (product.attributes.code && product.attributes.code.toLowerCase().includes(value)) ||
    (product.attributes.manufacturer && product.attributes.manufacturer.toLowerCase().includes(value))
  )
}

export const getFilteredProducts = createSelector(
  getProductFilter,
  getProductSearch,
  getProductSort,
  getProductList,
  (filter, search, sort, productList) => {
    var plist = [];

    if (!productList.length) {
      return plist;
    }
    
    switch (filter) {
      case 'active':
        plist = productList.filter(product => product.attributes.is_active);
        break;

      case 'inactive':
        plist = productList.filter(product => !product.attributes.is_active);
        break;

      case 'uncategorized':
        plist = productList.filter(product => !product.attributes.category);
        break;

      default:
        plist = productList;
    }

    plist = plist.filter(product => searchFilter(product, search));
    return _.orderBy(plist, `attributes.${sort.orderBy}`, sort.orderDir);
  }
);
