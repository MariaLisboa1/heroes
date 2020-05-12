import { put, all, takeLatest } from 'redux-saga/effects';

import { getHeroByIdSuccess } from './actions';

function* getHeroById({ hero }) {
  yield put(getHeroByIdSuccess(hero));
}

function* getAllHero({ hero }) {
  yield put(getHeroByIdSuccess(hero));
}

// function* addHero({hero}) {
//     produce(hero, (draft) => {
//       let series = hero[0].series.items;
//       series = [...series, serie];
//       draft[0].series.items = series;
//     });
// }

export default all([
  takeLatest('@hero/BY_ID_REQUEST', getHeroById),
  takeLatest('@hero/ALL_REQUEST', getAllHero),
]);
