export function addSerie(serie) {
  return {
    type: '@hero/ADD_SERIE',
    serie,
  };
}

export function overwriteNameDescription(name, description) {
  return {
    type: '@hero/OVERWRITE_NAME_DESC',
    name,
    description,
  };
}

export function removeSerie(resourceURI) {
  return {
    type: '@hero/REMOVE_SERIE',
    resourceURI,
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
