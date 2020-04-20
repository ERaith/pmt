import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import {
  mockPokemonList,
  mockTypes,
  mockTeam,
} from '../../../public/mockTestFiles';
import { BrowserRouter } from 'react-router-dom';
import Team from './Team';

jest.mock('../../apiCalls/apiCalls');

describe('Team View Tests', () => {
  // eslint-disable-next-line one-var
  let initialState, store, testWrapper;
  beforeEach(() => {
    initialState = {
      pokemonTeam: mockTeam.pokemonTeam,
    };
    store = createStore(rootReducer, initialState);
    testWrapper = (
      <BrowserRouter>
        <Provider store={store}>
          <Team path="/pokedex/Team/Team-Rocket" />
        </Provider>
      </BrowserRouter>
    );
  });
  it('renders Team View', async () => {
    const { getByLabelText } = render(testWrapper);
    await waitFor(() =>
      expect(getByLabelText('Save Team')).toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(getByLabelText('Delete Team')).toBeInTheDocument(),
    );
  });

  it('Adds to the Pokemon Team List', async () => {
    const { getByLabelText, debug } = render(testWrapper);
    let saveTeam;
    await waitFor(() => (saveTeam = getByLabelText('Save Team')));
    expect(saveTeam).toBeInTheDocument();
    fireEvent.click(saveTeam);
    expect(getByLabelText('Team Rocket')).toBeInTheDocument();
  });

  it('Removes from the Pokemon Team List', async () => {
    const { getByLabelText, debug, queryByLabelText } = render(testWrapper);
    let removeTeam;
    await waitFor(() => (removeTeam = getByLabelText('Delete Team')));
    expect(removeTeam).toBeInTheDocument();
    fireEvent.click(removeTeam);
    await waitFor(() =>
      expect(queryByLabelText('Team Rocket')).not.toBeInTheDocument(),
    );
  });
});
