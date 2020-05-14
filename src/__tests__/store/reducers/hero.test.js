import reducer from '../../../store/modules/hero/reducer';
import * as Hero from '../../../store/modules/hero/actions';

describe('Hero reducer', () => {
  it('@hero/ADD_SERIE', () => {
    const hero = [
      {
        id: 1011334,
        name: '3-D Man',
        description: 'Hero 3-d man',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        series: {
          items: [
            {
              resourceURI: 'super maria',
              name: 'super maria',
            },
          ],
        },
      },
    ];
    const serie = { resourceURI: 'super maria', name: 'super maria' };

    const state = reducer(hero, Hero.addSerie(serie));

    expect(state).toStrictEqual(hero);
  });

  it('@hero/REMOVE_SERIE', () => {
    const hero = [
      {
        id: 1011334,
        name: '3-D Man',
        description: 'Hero 3-d man',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        series: {
          items: [
            {
              resourceURI: 'super maria',
              name: 'super maria',
            },
            {
              resourceURI: 'capita marvel',
              name: 'capita marvel',
            },
          ],
        },
      },
    ];

    const resourceURI = 'super maria';

    const removeSerie = hero[0].series.items.filter(
      (serie) => serie.resourceURI !== resourceURI
    );
    hero[0].series.items = [];
    hero[0].series.items = removeSerie;

    const state = reducer(hero, Hero.removeSerie(resourceURI));
    expect(state).toStrictEqual(hero);
  });

  it('@hero/OVERWRITE_NAME_DESC', () => {
    const hero = [
      {
        id: 1011334,
        name: '3-D Man',
        description: 'Hero 3-d man',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        series: {
          items: [
            {
              resourceURI: 'super maria',
              name: 'super maria',
            },
            {
              resourceURI: 'capita marvel',
              name: 'capita marvel',
            },
          ],
        },
      },
    ];

    const name = 'super maria';
    const description = 'heroina maria';

    const state = reducer(
      hero,
      Hero.overwriteNameDescription(name, description)
    );
    hero[0].name = name;
    hero[0].description = description;

    expect(state).toStrictEqual(hero);
  });
});
