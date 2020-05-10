import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import _ from 'lodash';
import md5 from 'md5';
import api from '../../services/api';

import captain from '../../assets/images/captainAmerica.jpg';

import { Container, CardGroup, Form, SubmitButton, Card } from './styles';

export default class Home extends Component {
  state = {
    heroes: [],
    searchHero: [],
  };

  async componentDidMount() {
    const timestamp = Number(new Date());
    const publicKey = '160bee6a45bed990aecb5bfaa63e1fdb';
    const privateKey = 'aa8008b9e811354653df6e60452c7f659a4c187a';

    const hash = md5(timestamp + privateKey + publicKey);

    const response = await api.get(
      `/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
      {
        params: {
          limit: '20',
          offset: '0',
        },
      }
    );

    const heroes = response.data.data.results;
    this.setState({ heroes, searchHero: heroes });
  }

  search = (event) => {
    event.persist();

    if (!this.debouncedFn) {
      this.debouncedFn = _.debounce(() => {
        const searchString = event.target.value;
        const { heroes } = this.state;

        const searchHero = heroes.filter((hero) =>
          hero.name.includes(searchString)
        );
        this.setState({ searchHero });
      }, 300);
    }
    this.debouncedFn();
  };

  render() {
    const { searchHero } = this.state;
    return (
      <Container>
        <h1>HEROES</h1>

        <Form onChange={this.search}>
          <input type="text" placeholder="Hero" />

          <SubmitButton>
            <FaSearch color="#FFF" size={14} />
          </SubmitButton>
        </Form>

        <CardGroup>
          {searchHero.map((hero) => (
            <Card key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
              <h3>{hero.name}</h3>

              <Link to="/">Detalhes</Link>
            </Card>
          ))}
        </CardGroup>
      </Container>
    );
  }
}
