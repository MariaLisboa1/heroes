import React, { useState } from 'react';
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
import * as HeroActions from '../../store/modules/hero/actions';

import { Container, Form, FormAddSerie, SubmitButton, Button } from './styles';

function EditHero({ hero }) {
  const [newSerie, setNewSerie] = useState('');

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
    const serie = { resourceURI: '', name: newSerie };
    let series = hero[0].series.items;
    series = [...series, serie];
    hero[0].series.items = series;

    HeroActions.allHeroesRequest(hero);
    setNewSerie('');
  }

  return (
    <Container>
      {hero.map((editHero) => (
        <>
          <h1>Editar Herói</h1>
          <Form className={useStylesForm.root} key={editHero.id}>
            <TextField label="Herói" defaultValue={editHero.name} />

            <TextField label="Descrição" defaultValue={editHero.description} />
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
                    <TableCell align="center">
                      <MdDelete color="#FFF" size={20} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button>Salvar</Button>
        </>
      ))}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  hero: state.hero,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(HeroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditHero);
