export function allHeroesRequest(hero) {
  return {
    type: '@hero/ALL_REQUEST',
    hero,
  };
}

export function allHeroesSuccess(hero) {
  return {
    type: '@hero/ALL_SUCCESS',
    hero,
  };
}

export function getHeroByIdRequest(hero) {
  return {
    type: '@hero/BY_ID_REQUEST',
    hero,
  };
}

export function getHeroByIdSuccess(hero) {
  return {
    type: '@hero/BY_ID_SUCCESS',
    hero,
  };
}
