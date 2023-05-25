import { configureStore } from '@reduxjs/toolkit';
import companiesReducer, {
  getCompaniesAsync,
  getCompanyProfileAsync,
} from '../../redux/companies/companiesSlice';

describe('companiesSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        companies: companiesReducer,
      },
    });
  });

  describe('getCompaniesAsync', () => {
    it('fetches companies and updates the store', async () => {
      // Mock the API response
      const mockResponse = [
        { id: 1, name: 'Company A', rank: 1 },
        { id: 2, name: 'Company B', rank: 2 },
      ];
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });

      await store.dispatch(getCompaniesAsync());
      const state = store.getState().companies;

      expect(state.companies).toHaveLength(2);
      expect(state.companies[0].name).toEqual('Company A');
      expect(state.companies[1].rank).toEqual(2);
    });
  });

  describe('getCompanyProfileAsync', () => {
    it('fetches a company profile and updates the store', async () => {
      // Mock the API response
      const mockResponse = [
        { id: 1, name: 'Company A', rank: 1 },
      ];
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });

      const companyName = 'Company A';

      await store.dispatch(getCompanyProfileAsync(companyName));
      const state = store.getState().companies;

      expect(state.companyProfiles).toHaveLength(1);
      expect(state.companyProfiles[0].name).toEqual('Company A');
      expect(state.companyProfiles[0].rank).toEqual(1);
    });
  });
});
