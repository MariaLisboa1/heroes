import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import {
  addSerie,
  overwriteNameDescription,
  removeSerie,
} from '../../store/modules/hero/actions';
import EditHero from '../../pages/EditHero';

jest.mock('react-redux');

describe('EditHero page', () => {
  it('should render edit hero', () => {
    useSelector.mockImplementation((cb) =>
      cb({
        hero: [
          {
            id: 1011334,
            name: '3-D Man',
            description: 'Hero 3-d man',
            series: {
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

    const { getByTestId, getByText } = render(<EditHero />);

    expect(getByTestId('series-name')).toContainElement(
      getByText('Avengers: The Initiative (2007 - 2010)')
    );
  });

  it('should be able to change the heros name and description', () => {
    const { getByTestId, getByLabelText } = render(<EditHero />);

    const dispach = jest.fn();

    useDispatch.mockReturnValue(dispach);

    fireEvent.change(getByLabelText('Herói'), {
      target: { value: 'super maria' },
    });

    fireEvent.change(getByLabelText('Descrição'), {
      target: { value: 'heroina maria' },
    });

    fireEvent.click(getByTestId('submit-name-description'));

    expect(dispach).toHaveBeenCalledWith(
      overwriteNameDescription('super maria', 'heroina maria')
    );
  });

  it('should be able to add new serie', () => {
    const { getByTestId, getByLabelText } = render(<EditHero />);
    const dispach = jest.fn();

    useDispatch.mockReturnValue(dispach);

    fireEvent.change(getByLabelText('Adicionar serie'), {
      target: { value: 'maria' },
    });
    const serie = { resourceURI: 'maria', name: 'maria' };
    fireEvent.submit(getByTestId('series-form'));

    expect(dispach).toHaveBeenCalledWith(addSerie(serie));
  });

  it('should be able to exclude serie', () => {
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

    const dispach = jest.fn();

    useDispatch.mockReturnValue(dispach);

    const { getByTestId, getByText } = render(<EditHero />);

    expect(getByTestId('series-name')).toContainElement(
      getByText('Avengers: The Initiative (2007 - 2010)')
    );

    getByTestId('remove-serie').click();
    expect(dispach).toHaveBeenCalledWith(
      removeSerie('http://gateway.marvel.com/v1/public/series/1945')
    );
  });
});
