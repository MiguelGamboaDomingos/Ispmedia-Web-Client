import React, { useState } from 'react';
import radios from '../../../constants/radios.json';
import Radio from '../../componets/radio/Radio'; // assumindo que o componente Radio está no caminho correto
import './radios.scss';

const RadioScreen = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredRadios, setFilteredRadios] = useState(radios);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'all') {
      setFilteredRadios(radios);
    } else {
      setFilteredRadios(radios.filter((radio) => radio.country === tab));
    }
  };

  const countryTabs = [...new Set(radios.map((radio) => radio.country))].map((country, index) => (
    <li key={index}>
      <a
        className={activeTab === country ? 'active' : ''}
        onClick={() => handleTabChange(country)}
      >
        {country}
      </a>
    </li>
  ));

  return (
    <div className="radio-list">
      <ul className="tabs">
        <li>
          <a
            className={activeTab === 'all' ? 'active' : ''}
            onClick={() => handleTabChange('all')}
          >
            All
          </a>
        </li>
        {countryTabs}
      </ul>
      {filteredRadios.map((radio, index) => (
        <Radio key={index} radio={radio} />
      ))}
    </div>
  );
};

export default RadioScreen;
