import { put, all, takeLatest } from 'redux-saga/effects';

import { getHeroByIdSuccess } from './actions';

function* getHeroById({ hero }) {
  yield put(getHeroByIdSuccess(hero));
}

function* getAllHero({ hero }) {
  yield put(getHeroByIdSuccess(hero));
}

export default all([
  takeLatest('@hero/BY_ID_REQUEST', getHeroById),
  takeLatest('@hero/ALL_REQUEST', getAllHero),
]);
