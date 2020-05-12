import { put, all, call, takeLatest } from 'redux-saga/effects';
import md5 from 'md5';
import api from '../../../services/api';
import { allHeroesSuccess, getHeroByIdSuccess } from './actions';

function* getHeroById({ hero }) {
  yield put(getHeroByIdSuccess(hero));
}

function* getAllHero({ page }) {
  const timestamp = Number(new Date());
  const publicKey = '160bee6a45bed990aecb5bfaa63e1fdb';
  const privateKey = 'aa8008b9e811354653df6e60452c7f659a4c187a';

  const hash = md5(timestamp + privateKey + publicKey);

  const response = yield call(
    api.get,
    `/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
    {
      params: {
        limit: '20',
        offset: page,
      },
    }
  );

  const hero = response.data.data.results;

  yield put(allHeroesSuccess(hero));
}

export default all([
  takeLatest('@hero/BY_ID_REQUEST', getHeroById),
  takeLatest('@hero/ALL_REQUEST', getAllHero),
]);
