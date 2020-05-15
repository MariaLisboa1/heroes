import { put, all, takeLatest } from 'redux-saga/effects';

import { selectHeroSuccess } from './actions';

function* getHeroById({ hero }) {
  yield put(selectHeroSuccess(hero));
}

export default all([takeLatest('@hero/SELECT_REQUEST', getHeroById)]);
