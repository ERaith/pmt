import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Tests', () => {
  // eslint-disable-next-line one-var
  let initialState, store, testWrapper;
  describe('Navbar First Router Tests', () => {
    beforeEach(() => {
      store = createStore(rootReducer);
      testWrapper = (
        <MemoryRouter initialEntries={['pokedex/team/team-rocket']}>
          <Provider store={store}>
            <Navbar path="pokedex/team/team-rocket" />
          </Provider>
        </MemoryRouter>
      );
    });
    it('renders Nav View', async () => {
      const { getByLabelText } = render(testWrapper);
      let pokedexLink = getByLabelText('Pokedex');
      let teamStatsLink = getByLabelText('Team Stats');
      expect(pokedexLink).toBeInTheDocument();
      expect(teamStatsLink).toBeInTheDocument();
    });
    it('Pokedex Routes', async () => {
      const { queryByText } = render(testWrapper);
      let pokedexLink = queryByText('Pokedex');
      expect(pokedexLink).toBeInTheDocument();
      let pokedexHREF = pokedexLink.getAttribute('href');
      expect(pokedexHREF).toBe('/pokedex/team/team-rocket');
    });
    it('Stats Routes', async () => {
      const { queryByText } = render(testWrapper);
      let teamStatsLink = queryByText('Team Stats');
      expect(teamStatsLink).toBeInTheDocument();
      let teamStatsHREF = teamStatsLink.getAttribute('href');
      expect(teamStatsHREF).toBe('/team-stats/team/team-rocket');
    });
  });
  describe('Navbar Second Router Tests', () => {
    beforeEach(() => {
      store = createStore(rootReducer);
      testWrapper = (
        <MemoryRouter initialEntries={['pokedex/team/team-jacobs']}>
          <Provider store={store}>
            <Navbar path="pokedex/team/team-jacobs" />
          </Provider>
        </MemoryRouter>
      );
    });
    it('Pokedex Routes', async () => {
      const { queryByText } = render(testWrapper);
      let pokedexLink = queryByText('Pokedex');
      expect(pokedexLink).toBeInTheDocument();
      let pokedexHREF = pokedexLink.getAttribute('href');
      expect(pokedexHREF).toBe('/pokedex/team/team-jacobs');
    });
    it('Stats Routes', async () => {
      const { queryByText } = render(testWrapper);
      let teamStatsLink = queryByText('Team Stats');
      expect(teamStatsLink).toBeInTheDocument();
      let teamStatsHREF = teamStatsLink.getAttribute('href');
      expect(teamStatsHREF).toBe('/team-stats/team/team-jacobs');
    });
  });
});
