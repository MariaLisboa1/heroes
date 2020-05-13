import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import _ from 'lodash';
import md5 from 'md5';
import { toast } from 'react-toastify';
import api from '../../services/api';

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
    timestamp: Number(new Date()),
    publicKey: '3188e31e20f58598e6092f23c96ea3d1',
    privateKey: '1e3f01d0a43d1993b305911ec15531a2bb638f30',
  };

  componentDidMount() {
    localStorage.clear();
    this.getAllCharacters(0);
  }

  getAllCharacters = async (page) => {
    const { timestamp, publicKey, privateKey } = this.state;

    const hash = md5(timestamp + privateKey + publicKey);

    try {
      const response = await api.get(
        `/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
        {
          params: {
            limit: '20',
            offset: page,
          },
        }
      );

      const { hero } = this.props;

      let heroes = response.data.data.results;

      if (hero.length > 0) {
        const filterHero = heroes.filter(
          (heroFilter) => heroFilter.id !== hero[0].id
        );
        heroes = filterHero.concat(hero);
      }

      this.setState({ heroes, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      toast.error('Ocorreu um erro, tente novamente mais tarde.');
    }
  };

  getCharactersName = async (nameStartsWith) => {
    const { timestamp, publicKey, privateKey } = this.state;

    const hash = md5(timestamp + privateKey + publicKey);

    try {
      const response = await api.get(
        `/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
        {
          params: {
            nameStartsWith,
          },
        }
      );
      const heroes = response.data.data.results;
      this.setState({ heroes, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      toast.error('Ocorreu um erro, tente novamente mais tarde.');
    }
  };

  search = (event) => {
    event.persist();

    if (!this.debouncedFn) {
      this.debouncedFn = _.debounce(() => {
        this.setState({ loading: true });
        const searchString = event.target.value;

        if (searchString) return this.getCharactersName(searchString);

        return this.getAllCharacters(0);
      }, 300);
    }
    this.debouncedFn();
  };

  handleDetails = (hero) => {
    const { getHeroByIdRequest } = this.props;

    getHeroByIdRequest(hero);
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
    const { heroes, page, lastPage, loading } = this.state;

    return (
      <Container>
        <h1>HERÓIS</h1>

        <Form onChange={() => this.search}>
          <input type="text" placeholder="Herói" />

          <SubmitButton>
            <FaSearch color="#FFF" size={14} />
          </SubmitButton>
        </Form>

        {loading ? <Loading /> : ''}

        <NoHaveHero>
          {heroes.length === 0 ? <p>Não achamos esse herói :(</p> : ''}
        </NoHaveHero>

        <CardGroup>
          {heroes.map((hero) => (
            <Card key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
              <h3>{hero.name}</h3>

              <Link onClick={() => this.handleDetails(hero)} to="/details">
                Detalhes
              </Link>

              <Link onClick={() => this.handleDetails(hero)} to="/editHero">
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
  getHeroByIdRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hero: state.hero,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(HeroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
