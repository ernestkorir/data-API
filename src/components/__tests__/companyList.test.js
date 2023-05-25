import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import CompaniesList from '../companiesList';
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

  it('dispatches getCompaniesAsync action on mount', () => {
    render(<CompaniesList />);
    expect(useDispatch).toHaveBeenCalled();
    expect(getCompaniesAsync).toHaveBeenCalled();
  });
});
