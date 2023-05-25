import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import CompaniesList from '../CompaniesList';
import '@testing-library/jest-dom';
import { getCompaniesAsync } from '../../redux/companies/companiesSlice';



// Mock the Redux store and actions
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the getCompaniesAsync action
jest.mock('../../redux/companies/companiesSlice', () => ({
  getCompaniesAsync: jest.fn(),
}));

describe('CompaniesList', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ companies: [] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // it('renders the company buttons correctly', async () => {
  //   const mockCompanies = [
  //     { id: 1, name: 'Company A', rank: 1 },
  //     { id: 2, name: 'Company B', rank: 2 },
  //   ];
  //   useSelector.mockReturnValue({ companies: mockCompanies });

  //   const { getByText } = render(
  //     <CompaniesList />
  //   );

  //   await waitFor(() => {
  //     mockCompanies.forEach((company) => {
  //       expect(getByText(company.name)).toBeInTheDocument();
  //       expect(getByText(`Rank: ${company.rank}`)).toBeInTheDocument();
  //     });
  //   });
  // });

  it('dispatches getCompaniesAsync action on mount', () => {
    render(<CompaniesList />);
    expect(useDispatch).toHaveBeenCalled();
    expect(getCompaniesAsync).toHaveBeenCalled();
  });
});