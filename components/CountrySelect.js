import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const CountrySelect = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const options = countries.map((country) => ({
    value: country.name.common,
    label: country.name.common,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: 52,
      width: 330,
      borderRadius: '0.5rem',
      paddingLeft: '1.5rem',
      textTransform: 'capitalize',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      '&:focus': {
        borderColor: 'accent',
        boxShadow: '0 0 0 1px accent',
      },
      '&::placeholder': {
        color: 'rgba(255, 255, 255, 0.3)',
        fontWeight: '300',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.isSelected ? 'black' : 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'none' : 'white',
      color: state.isSelected ? 'red' : 'black',
    }),
  };

  return <Select id="country" name="country" options={options} styles={customStyles} placeholder="Nacionalidad" />;
};

export default CountrySelect;
