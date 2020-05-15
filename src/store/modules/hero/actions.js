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

export function selectHeroRequest(hero) {
  return {
    type: '@hero/SELECT_REQUEST',
    hero,
  };
}

export function selectHeroSuccess(hero) {
  return {
    type: '@hero/SELECT_SUCCESS',
    hero,
  };
}
