import produce from 'immer';
import { toast } from 'react-toastify';
import history from '../../../services/history';

export default function hero(state = [], action) {
  switch (action.type) {
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
    case '@hero/OVERWRITE_NAME_DESC':
      return produce(state, (draft) => {
        if (action.name) draft[0].name = action.name;

        if (action.description) draft[0].description = action.description;
        history.push('/');
      });
    default:
      return state;
  }
}
