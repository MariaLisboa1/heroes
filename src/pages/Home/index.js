import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import _ from 'lodash';

import captain from '../../assets/images/captainAmerica.jpg';

import { Container, CardGroup, Form, SubmitButton, Card } from './styles';

export default class Home extends Component {
  state = {
    heroes: [],
    searchHero: [],
  };

  componentDidMount() {
    const listHeroes = [
      {
        id: 1,
        name: 'maria',
        description:
          'É um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics.',
      },
      {
        id: 2,
        name: 'nazare',
        description:
          'É um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics.',
      },
      {
        id: 3,
        name: 'capitao',
        description:
          'É um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics.',
      },
    ];

    this.setState({ heroes: listHeroes, searchHero: listHeroes });
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
              <img src={captain} alt="Capitão America" />
              <div>
                <h3>{hero.name}</h3>

                <p>{hero.description}</p>
              </div>
            </Card>
          ))}
        </CardGroup>
      </Container>
    );
  }
}
