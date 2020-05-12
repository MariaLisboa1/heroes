export default function hero(state = [], action) {
  switch (action.type) {
    case '@hero/ALL_SUCCESS':
      return [action.hero];
    case '@hero/BY_ID_SUCCESS':
      return [action.hero];
    default:
      return state;
  }
}
