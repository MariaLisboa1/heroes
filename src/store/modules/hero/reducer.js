export default function hero(state = [], action) {
  switch (action.type) {
    case 'HERO_DETAIL':
      return [action.hero];
    default:
      return state;
  }
}
