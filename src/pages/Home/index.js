import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import _ from 'lodash';
import Heroes from '../../services/api';

import * as HeroActions from '../../store/modules/hero/actions';

import {
  Container,
  CardGroup,
  Form,
  SubmitButton,
  Card,
  ButtonList,
  Button,
  NoHaveHero,
  Loading,
} from './styles';

class Home extends Component {
  state = {
    heroes: [],
    page: 0,
    lastPage: true,
    loading: true,
    noHero: false,
  };

  componentDidMount() {
    localStorage.clear();
    this.getAllHeroes(0);
  }

  getAllHeroes = async (page) => {
    try {
      const { hero } = this.props;
      let newHeroes = await Heroes.getAllHeroes(page);

      if (hero.length > 0) {
        const filteredHeroes = newHeroes.filter(
          (newHero) => newHero.id !== hero[0].id
        );
        newHeroes = filteredHeroes.concat(hero);
      }

      this.setState({ heroes: newHeroes, loading: false, noHero: false });
    } catch (error) {
      this.setState({ loading: false, noHero: true });
    }
  };

  getCharactersName = async (nameStartsWith) => {
    try {
      const heroes = await Heroes.getCharactersName(nameStartsWith);
      this.setState({ heroes, loading: false, noHero: false });
    } catch (error) {
      this.setState({ loading: false, noHero: true });
    }
  };

  search = (event) => {
    event.persist();
    event.preventDefault();

    if (!this.debouncedFn) {
      this.debouncedFn = _.debounce(() => {
        this.setState({ loading: true });
        const searchString = event.target.value;

        if (searchString) return this.getCharactersName(searchString);

        return this.getAllHeroes(0);
      }, 300);
    }
    this.debouncedFn();
  };

  selectHero = (hero) => {
    const { selectHeroRequest } = this.props;
    selectHeroRequest(hero);
  };

  handlePage = (page) => {
    if (page === 0) {
      return this.setState({
        lastPage: true,
      });
    }

    this.getCharacters(page);
    window.scrollTo(0, 0);
    return this.setState({
      lastPage: false,
      page,
    });
  };

  render() {
    const { heroes, page, lastPage, loading, noHero } = this.state;

    return (
      <Container>
        <h1>HERÓIS</h1>

        <Form data-testid="hero-form" onChange={this.search}>
          <input data-testid="hero-input" type="text" placeholder="Herói" />

          <SubmitButton>
            <FaSearch color="#FFF" size={14} />
          </SubmitButton>
        </Form>

        {loading ? <Loading /> : ''}

        <NoHaveHero>
          {noHero === 0 ? <p>Não achamos esse herói :(</p> : ''}
        </NoHaveHero>

        <CardGroup>
          {heroes.map((hero) => (
            <Card key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
              <h3 data-testid="heros-name">{hero.name}</h3>

              <Link onClick={() => this.selectHero(hero)} to="/heroDetails">
                Detalhes
              </Link>

              <Link onClick={() => this.selectHero(hero)} to="/editHero">
                Editar
              </Link>
            </Card>
          ))}
        </CardGroup>
        {heroes.length > 0 ? (
          <ButtonList>
            <Button
              lastPage={lastPage}
              onClick={() => this.handlePage(page - 1)}
            >
              Anterior
            </Button>
            <Button onClick={() => this.handlePage(page + 1)}>Próxima</Button>
          </ButtonList>
        ) : (
          ''
        )}
      </Container>
    );
  }
}

Home.propTypes = {
  hero: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectHeroRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hero: state.hero,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(HeroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
