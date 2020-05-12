import produce from 'immer';
import { toast } from 'react-toastify';

export default function hero(state = [], action) {
  switch (action.type) {
    case '@hero/ALL_SUCCESS':
      return [action.hero];
    case '@hero/BY_ID_SUCCESS':
      return [action.hero];
    case '@hero/REMOVE_SERIE':
      return produce(state, (draft) => {
        const findSerie = state[0].series.items.filter(
          (serie) => serie.resourceURI !== action.resourceURI
        );
        draft[0].series.items = [];
        draft[0].series.items = findSerie;
      });
    case '@hero/ADD_SERIE':
      return produce(state, (draft) => {
        const serieExists = state[0].series.items.find(
          (serie) => serie.name === action.serie.name
        );

        if (serieExists) {
          toast.error('Serie já existe na grade.');
          return;
        }

        let series = state[0].series.items;
        series = [...series, action.serie];
        draft[0].series.items = series;
      });
    default:
      return state;
  }
}
