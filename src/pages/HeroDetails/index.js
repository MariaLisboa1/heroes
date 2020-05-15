import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Container, Detail, ImageThumbnail, HeroDetail } from './styles';

import Storage from '../../services/storage';

export default function HeroDetails() {
  const [heroDetail, setHeroDetail] = useState([]);

  const hero = useSelector((state) => state.hero);

  function saveStorage() {
    const storageHero = Storage.getStorage('hero');

    if (storageHero && storageHero.length > 2)
      return setHeroDetail(JSON.parse(storageHero));

    setHeroDetail(hero);

    return Storage.setStorage('hero', hero);
  }

  useEffect(() => {
    saveStorage();
  }, []);

  return (
    <Container>
      {heroDetail.map((detail) => (
        <Detail key={detail.id}>
          <ImageThumbnail>
            <img
              src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
              alt=""
            />
            <h1 data-testid="hero-name">{detail.name}</h1>
          </ImageThumbnail>

          <HeroDetail>
            <h1>Descrição</h1>
            <p data-testid="hero-description">{detail.description}</p>

            <h1>Series</h1>
            {detail.series.items.map((serie) => (
              <p data-testid="series-name" key={serie.resourceURI}>
                {' '}
                {serie.name}
              </p>
            ))}
          </HeroDetail>
        </Detail>
      ))}
    </Container>
  );
}
