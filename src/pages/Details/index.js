import React from 'react';
import { connect } from 'react-redux';
import { Container, Detail, ImageThumbnail, HeroDetails } from './styles';

function Details({ hero }) {
  return (
    <Container>
      {hero.map((detail) => (
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

            <h1>Comics</h1>
            {detail.comics.items.map((comic) => (
              <p key={comic.resourceURI}> {comic.name}</p>
            ))}

            <h1>Historias</h1>
            {detail.stories.items.map((storie) => (
              <p key={storie.resourceURI}> {storie.name}</p>
            ))}
          </HeroDetails>
        </Detail>
      ))}
    </Container>
  );
}

export default connect((state) => ({
  hero: state.hero,
}))(Details);
