import React, { useEffect, useState, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { Container, Detail, ImageThumbnail, HeroDetails } from './styles';

export default function Details() {
  const [heroDetail, setHeroDetail] = useState([]);

  const hero = useSelector((state) => state.hero);

  const saveStorage = useCallback(() => {
    const storageHero = localStorage.getItem('hero');

    if (storageHero && storageHero.length > 2)
      return setHeroDetail(JSON.parse(storageHero));

    setHeroDetail(hero);
    return localStorage.setItem('hero', JSON.stringify(hero));
  }, [hero]);

  useEffect(() => {
    saveStorage();
  }, [saveStorage]);

  return (
    <Container>
      {heroDetail.map((detail) => (
        <Detail key={detail.id}>
          <ImageThumbnail>
            <img
              data-testid="hero-image"
              src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
              alt=""
            />
            <h1 data-testid="hero-name">{detail.name}</h1>
          </ImageThumbnail>

          <HeroDetails>
            <h1>Descrição</h1>
            <p data-testid="hero-description">{detail.description}</p>

            <h1>Series</h1>
            {detail.series.items.map((serie) => (
              <p data-testid="series-name" key={serie.resourceURI}>
                {' '}
                {serie.name}
              </p>
            ))}
          </HeroDetails>
        </Detail>
      ))}
    </Container>
  );
}
