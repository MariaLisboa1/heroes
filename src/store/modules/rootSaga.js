import { all } from 'redux-saga/effects';

import hero from './hero/sagas';

export default function* rootSaga() {
  return yield all([hero]);
}
