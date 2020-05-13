import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Detail, ImageThumbnail, HeroDetails } from './styles';

function Details({ hero }) {
  const [heroDetail, setHeroDetail] = useState([]);

  useEffect(() => {
    function saveStorage() {
      const storageHero = localStorage.getItem('hero');

      if (storageHero && storageHero.length > 2)
        return setHeroDetail(JSON.parse(storageHero));

      setHeroDetail(hero);
      return localStorage.setItem('hero', JSON.stringify(hero));
    }
    saveStorage();
  }, [hero]);

  return (
    <Container>
      {heroDetail.map((detail) => (
        <Detail key={detail.id}>
          <ImageThumbnail>
            <img
              src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
              alt=""
            />
            <h1>{detail.name}</h1>
          </ImageThumbnail>

          <HeroDetails>
            <h1>Descrição</h1>
            <p>{detail.description}</p>

            <h1>Series</h1>
            {detail.series.items.map((serie) => (
              <p key={serie.resourceURI}> {serie.name}</p>
            ))}
          </HeroDetails>
        </Detail>
      ))}
    </Container>
  );
}

Details.propTypes = {
  hero: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }).isRequired,
      serie: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            resourceURI: PropTypes.string,
            name: PropTypes.string,
          })
        ),
      }),
    })
  ).isRequired,
};

export default connect((state) => ({
  hero: state.hero,
}))(Details);
