import { createStore } from 'vuex';
import { searchFlightsFromApi, fetchApiConfig } from '@/services/flight.api.js';

export default createStore({
  state: {
    searchLoading: false,
    departureFlights: null,
    returnFlights: null,
    config: {
      airportCount: null,
      flightCountPerAirport: null,
      dateScope: null,
    },
  },
  mutations: {
    setSearchLoading(state, isLoading) {
      state.searchLoading = isLoading;
    },
    setDepartureFlights(state, flights) {
      state.departureFlights = flights;
    },
    setReturnFlights(state, flights) {
      state.returnFlights = flights;
    },
    setApiConfig(state, config) {
      state.apiConfig = config;
    },
  },
  actions: {
    async searchForFlights({ commit }, flightSearchOptions) {
      try {
        commit('setSearchLoading', true);

        const result = await searchFlightsFromApi(flightSearchOptions);

        commit('setDepartureFlights', result.departureFlights);
        commit('setReturnFlights', result.returnFlights);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        commit('setSearchLoading', false);
      }
    },
    async fetchApiConfig({ commit }) {
      try {
        const config = await fetchApiConfig();
        commit('setApiConfig', config.apiConfig);
      } catch (error) {
        console.error('API ayarlarını getirme hatası:', error);
        throw error;
      }
    },
  },
  getters: {
    isSearchLoading: (state) => state.searchLoading,
    departureFlights: (state) => state.departureFlights,
    returnFlights: (state) => state.returnFlights,
    config: (state) => state.config,
  },
});
