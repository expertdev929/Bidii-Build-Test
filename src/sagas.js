import { all } from 'redux-saga/effects'
import { productSagas } from './products';


export default function* sagas() {
  yield all([
    ...productSagas
  ]);
}