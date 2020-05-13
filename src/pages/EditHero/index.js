import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import * as HeroActions from '../../store/modules/hero/actions';

import history from '../../services/history';
import {
  Container,
  FormContainer,
  Form,
  FormAddSerie,
  SubmitButton,
} from './styles';

function EditHero({ hero, removeSerie, addSerie, overwriteNameDescription }) {
  const [newSerie, setNewSerie] = useState('');
  const [nameHero, setNameHero] = useState('');
  const [descriptionHero, setDescriptionHero] = useState('');

  const useStylesTable = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const useStylesForm = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  function addNewSerie(e) {
    e.preventDefault();
    const serie = { resourceURI: newSerie, name: newSerie };
    addSerie(serie);
    setNewSerie('');
  }

  useEffect(() => {
    function checkHero() {
      if (hero.length > 0) return;
      history.push('/');
    }
    checkHero();
  }, [hero]);

  return (
    <Container>
      {hero.map((editHero) => (
        <FormContainer key={editHero.id}>
          <h1>Editar Herói</h1>
          <Form className={useStylesForm.root}>
            <TextField
              label="Herói"
              defaultValue={editHero.name}
              onChange={(e) => setNameHero(e.target.value || '')}
            />

            <TextField
              label="Descrição"
              defaultValue={editHero.description}
              onChange={(e) => setDescriptionHero(e.target.value || '')}
            />
          </Form>
          <FormAddSerie onSubmit={addNewSerie}>
            <TextField
              label="Adicionar serie"
              value={newSerie}
              onChange={(e) => setNewSerie(e.target.value || '')}
            />
            <SubmitButton>
              <FaPlus color="#FFF" size={14} />
            </SubmitButton>
          </FormAddSerie>
          <TableContainer component={Paper}>
            <Table className={useStylesTable.table} aria-label="Series table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Series</TableCell>
                  <TableCell align="center">Apagar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {editHero.series.items.map((serie) => (
                  <TableRow key={serie.name}>
                    <TableCell component="th" scope="row" align="center">
                      {serie.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => removeSerie(serie.resourceURI)}
                    >
                      <MdDelete color="#FFF" size={20} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="div-link">
            <Link
              onClick={() =>
                overwriteNameDescription(nameHero, descriptionHero)
              }
              to="/"
            >
              Salvar
            </Link>
          </div>
        </FormContainer>
      ))}
    </Container>
  );
}

EditHero.propTypes = {
  hero: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeSerie: PropTypes.func.isRequired,
  addSerie: PropTypes.func.isRequired,
  overwriteNameDescription: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hero: state.hero,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(HeroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditHero);
