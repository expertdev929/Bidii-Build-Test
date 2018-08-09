export const productActions = {
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  FILTER_PRODUCTS: 'FILTER_PRODUCTS',
  SEARCH_PRODUCTS: 'SEARCH_PRODUCTS',
  SORT_PRODUCTS: 'SORT_PRODUCTS',
  ACTIVE_PRODUCTS: 'ACTIVE_PRODUCTS',
  DELETE_PRODUCTS: 'DELETE_PRODUCTS',
  CHECK_PRODUCT: 'CHECK_PRODUCT',

  loadProducts: products => ({
    type: productActions.LOAD_PRODUCTS,
    payload: { products }
  }),

  filterProducts: filterValue => ({
    type: productActions.FILTER_PRODUCTS,
    payload: { filterValue }
  }),

  searchProducts: searchValue => ({
    type: productActions.SEARCH_PRODUCTS,
    payload: { searchValue }
  }),

  sortProducts: payload => ({
    type: productActions.SORT_PRODUCTS,
    payload
  }),

  activeProducts: payload => ({
    type: productActions.ACTIVE_PRODUCTS,
    payload
  }),

  deleteProducts: payload => ({
    type: productActions.DELETE_PRODUCTS,
    payload
  }),

  checkProduct: payload => ({
    type: productActions.CHECK_PRODUCT,
    payload
  })
};
