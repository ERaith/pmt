import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { mockPokemonList, mockTypes } from '../../../public/mockTestFiles';
import { fetchPokemon, fetchTypes } from '../../apiCalls/apiCalls';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('../../apiCalls/apiCalls');

describe('Pokedex Tests', () => {
  // eslint-disable-next-line one-var
  let initialState, store, testWrapper;
  beforeEach(() => {
    fetchPokemon.mockResolvedValue(mockPokemonList);
    store = createStore(rootReducer);
    fetchTypes.mockResolvedValue(mockTypes);
    testWrapper = (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
  it('renders the pokedex', async () => {
    const { getByAltText } = render(testWrapper);
    await waitFor(() => expect(getByAltText('bulbasaur')).toBeInTheDocument());
  });
  it('can filter the pokemon', async () => {
    const { getByAltText, debug, getByLabelText } = render(testWrapper);
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    expect(ivysaur).toBeInTheDocument();
    let searchByName = getByLabelText('Search by Name');
    fireEvent.change(searchByName, { target: { value: 'b' } });
    expect(ivysaur).not.toBeInTheDocument();
  });
  it('can add pokemon to the Team', async () => {
    const { getByLabelText, debug, getByAltText } = render(testWrapper);
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    expect(ivysaur).toBeInTheDocument();
    fireEvent.click(ivysaur);
    expect(getByLabelText('Team ivysaur')).toBeInTheDocument();
  });
  it('can remove pokemon to the Team', async () => {
    const { getByLabelText, debug, getByAltText, queryByLabelText } = render(
      testWrapper,
    );
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    expect(ivysaur).toBeInTheDocument();
    fireEvent.click(ivysaur);
    expect(getByLabelText('Team ivysaur')).toBeInTheDocument();
    let release = getByLabelText('ivysaur Release');
    fireEvent.click(release);
    expect(queryByLabelText('Team ivysaur')).not.toBeInTheDocument();
  });
  it('can look at the stats of their team', async () => {
    const { getByLabelText, debug, getByAltText } = render(testWrapper);
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    fireEvent.click(ivysaur);
    let statsView = getByLabelText('Team Stats');
    fireEvent.click(statsView);
    expect(getByLabelText('normal')).toBeInTheDocument();
    let pokedex = getByLabelText('Pokedex');
    fireEvent.click(pokedex);
  });
  it('can save their team', async () => {
    const { getByLabelText, debug, getByAltText } = render(testWrapper);
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    fireEvent.click(ivysaur);
    let saveTeam = getByLabelText('Save Team');
    fireEvent.click(saveTeam);
    expect(getByLabelText('Team Rocket')).toBeInTheDocument();
  });
  it('can delete their team', async () => {
    const { getByLabelText, debug, getByAltText, queryByLabelText } = render(
      testWrapper,
    );
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    fireEvent.click(ivysaur);
    let saveTeam = getByLabelText('Save Team');
    let deleteTeam = getByLabelText('Delete Team');
    fireEvent.click(saveTeam);
    expect(getByLabelText('Team Rocket')).toBeInTheDocument();
    fireEvent.click(deleteTeam);
    await waitFor(() =>
      expect(queryByLabelText('Team Rocket')).not.toBeInTheDocument(),
    );
  });
  it('can name their team', async () => {
    const { getByLabelText, debug, getByAltText, queryByLabelText } = render(
      testWrapper,
    );
    let ivysaur;
    await waitFor(() => (ivysaur = getByAltText('ivysaur')));
    fireEvent.click(ivysaur);
    let nameTeam = getByLabelText('Name Your Team');
    fireEvent.change(nameTeam, { target: { value: 'Team Blue' } });
    let saveTeam = getByLabelText('Save Team');
    let deleteTeam = getByLabelText('Delete Team');
    fireEvent.click(saveTeam);
    expect(getByLabelText('Team Blue')).toBeInTheDocument();
    fireEvent.click(deleteTeam);
    await waitFor(() =>
      expect(queryByLabelText('Team Blue')).not.toBeInTheDocument(),
    );
  });
});
