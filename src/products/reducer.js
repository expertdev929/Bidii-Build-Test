import { List, Record } from 'immutable';
import { productActions } from './actions';


export const ProductsState = new Record({
  filter: '',
  search: '',
  sort: new Record({orderBy: 'name', orderDir: 'desc'}),
  loading: true,
  checked_count: 0,
  list: new List()
});

export function productsReducer(state = new ProductsState(), {payload, type}) {
  var products = [], checked_count = 0;

  switch (type) {
    case productActions.LOAD_PRODUCTS:
      return state.set('list', payload).set('loading', false);

    case productActions.FILTER_PRODUCTS:
      return state.set('filter', payload.filterValue || '');

    case productActions.SEARCH_PRODUCTS:
      return state.set('search', payload.searchValue || '');

    case productActions.SORT_PRODUCTS:
      return state.set('sort', payload);

    case productActions.ACTIVE_PRODUCTS:
      products = state.list.map(product => {
        if (product.checked) {
          product.attributes.is_active = payload;
          product.checked = false;
        }
        return product;
      });
      return state.set('list', products).set('checked_count', 0);

    case productActions.DELETE_PRODUCTS:
      products = state.list.filter(product => {
        return !product.checked;
      });
      return state.set('list', products).set('checked_count', 0);

    case productActions.CHECK_PRODUCT:
      checked_count = 0;
      products = state.list.map(product => {
        if (product.checked) {
          checked_count ++;
        }
        return (product.id === payload.id) ? payload : product;
      });
      return state.set('list', products).set('checked_count', checked_count);

    default:
      return state;
  }
}
