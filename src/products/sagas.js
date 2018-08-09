import { call, fork, put, take } from 'redux-saga/effects';
import { productActions } from './actions';
import { fetchProducts } from '../api';

function* watchLoadProducts() {
  while (true) {
    yield take(productActions.LOAD_PRODUCTS);
    var products = yield call(fetchProducts);
    products = products.data.data;
    products = products.map(product => {
      product['checked'] = false;
      return product;
    });
    yield put({
      type: productActions.LOAD_PRODUCTS,
      payload: products
    });
  } 
}

function* watchFilterChange() {
  while (true) {
    let { payload } = yield take(productActions.FILTER_PRODUCTS);
    yield put({
      type: productActions.FILTER_PRODUCTS,
      payload
    });
  }
}

function* watchSearchChange() {
  while (true) {
    let { payload } = yield take(productActions.SEARCH_PRODUCTS);
    yield put({
      type: productActions.SEARCH_PRODUCTS,
      payload
    });
  }
}

function* watchSortChange() {
  while (true) {
    let { payload } = yield take(productActions.SORT_PRODUCTS);
    yield put({
      type: productActions.SORT_PRODUCTS,
      payload
    });
  }
}

function* watchActiveProducts() {
  while (true) {
    let { payload } = yield take(productActions.ACTIVE_PRODUCTS);
    yield put({
      type: productActions.ACTIVE_PRODUCTS,
      payload
    });
  }
}

function* watchDeleteProducts() {
  while (true) {
    let { payload } = yield take(productActions.DELETE_PRODUCTS);
    yield put({
      type: productActions.DELETE_PRODUCTS,
      payload
    });
  }
}

function* watchCheckProduct() {
  while (true) {
    let { payload } = yield take(productActions.CHECK_PRODUCT);
    yield put({
      type: productActions.CHECK_PRODUCT,
      payload
    });
  }
}

export const productSagas = [
  fork(watchLoadProducts),
  fork(watchFilterChange),
  fork(watchSearchChange),
  fork(watchSortChange),
  fork(watchActiveProducts),
  fork(watchDeleteProducts),
  fork(watchCheckProduct),
];