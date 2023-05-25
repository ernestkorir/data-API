import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompaniesAsync } from '../redux/companies/companiesSlice';
import CompanyButton from './CompanyButton';
import './styles/CompaniesList.css';

const CompaniesList = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(getCompaniesAsync());
  }, [dispatch]);

  return (
    <div className="companies-list">
      {companies.map((company) => {
        const rankAsString = String(company.rank); // Convert rank to string

        return React.createElement(CompanyButton, {
          key: company.id,
          name: company.name,
          rank: rankAsString,
        });
      })}
    </div>
  );
};

export default CompaniesList;
