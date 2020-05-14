import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as HeroActions from '../../store/modules/hero/actions';
import history from '../../services/history';
import {
  Container,
  FormContainer,
  Form,
  FormAddSerie,
  SubmitButton,
  ButtonSave,
} from './styles';

export default function EditHero() {
  const [newSerie, setNewSerie] = useState('');
  const [heroName, setHeroName] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const hero = useSelector((state) => state.hero);

  const dispatch = useDispatch();
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
    dispatch(HeroActions.addSerie(serie));
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
          <Form
            data-testid="form-name-description"
            className={useStylesForm.root}
          >
            <input
              type="text"
              data-testid="heroName"
              placeholder="Herói"
              defaultValue={editHero.name}
              onChange={(e) => setHeroName(e.target.value || '')}
            />

            <input
              data-testid="heroDescription"
              type="text"
              placeholder="Descrição"
              defaultValue={editHero.description}
              onChange={(e) => setHeroDescription(e.target.value || '')}
            />
          </Form>
          <FormAddSerie data-testid="series-form" onSubmit={addNewSerie}>
            <input
              data-testid="addNewSerie"
              value={newSerie}
              placeholder="Adicionar serie"
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
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      data-testid="series-name"
                    >
                      {serie.name}
                    </TableCell>
                    <TableCell
                      data-testid="remove-serie"
                      align="center"
                      onClick={() =>
                        dispatch(HeroActions.removeSerie(serie.resourceURI))
                      }
                    >
                      <MdDelete color="#FFF" size={20} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <div className="div-link"> */}
          <ButtonSave
            type="button"
            data-testid="submit-name-description"
            onClick={() =>
              dispatch(
                HeroActions.overwriteNameDescription(heroName, heroDescription)
              )
            }
          >
            Salvar
          </ButtonSave>
          {/* </div> */}
        </FormContainer>
      ))}
    </Container>
  );
}
