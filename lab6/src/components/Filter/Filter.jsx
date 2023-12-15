import React, { useState } from 'react';
import Select from '../Select/Select';
import '../Filter/Filter.styles.css'

function Filter() {

  const [selectedOption, setSelectedOption] = useState('all');
  const [selectedOption2, setSelectedOption2] = useState('all');

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event) => {
      setSelectedOption2(event.target.value);
  };
  return (
      <div className="filter_catalog">
        <div className='filters'>
          <nav className="header_catalog_nav1">
              <Select
                  options={[
                      { label: 'Price', value: 'Price' },
                      { label: 'From higher to lower', value: 'high_low' },
                      { label: 'From lower to higher', value: 'low_high' }
                  ]}
                  value={selectedOption}
                  onChange={handleOptionChange}
              />
          </nav>
          <nav className="header_catalog_nav2">
              <Select
                  options={[
                      { label: 'Title', value: 'Title' },
                      { label: 'With a number', value: 'y_number' },
                      { label: 'Without a number', value: 'n_number' }
                  ]}
                  value={selectedOption2}
                  onChange={handleOptionChange2}
              />
          </nav>
          </div>
          <button className="button_apply">Apply</button>
      </div>
  );
}

export default Filter;
