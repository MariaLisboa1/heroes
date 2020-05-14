import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import Details from '../../pages/Details';

jest.mock('react-redux');

describe('Detail page', () => {
  it('should render hero details', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        hero: [
          {
            id: 1011334,
            name: '3-D Man',
            description: 'Hero 3-d man',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              extension: 'jpg',
            },
            resourceURI:
              'http://gateway.marvel.com/v1/public/characters/1011334',
            series: {
              available: 3,
              collectionURI:
                'http://gateway.marvel.com/v1/public/characters/1011334/series',
              items: [
                {
                  resourceURI:
                    'http://gateway.marvel.com/v1/public/series/1945',
                  name: 'Avengers: The Initiative (2007 - 2010)',
                },
              ],
            },
          },
        ],
      })
    );
    const { getByTestId, getByText } = render(<Details />);

    expect(getByTestId('hero-name')).toContainElement(getByText('3-D Man'));
    expect(getByTestId('hero-description')).toContainElement(
      getByText('Hero 3-d man')
    );
    expect(getByTestId('series-name')).toContainElement(
      getByText('Avengers: The Initiative (2007 - 2010)')
    );
  });
});
