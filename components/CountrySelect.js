import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

const CountrySelect = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCountries()
  }, [])

  const options = countries.map((country) => ({
    value: country.name.common,
    label: country.name.common
  }))

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? '#F13024' : provided.borderColor,
      boxShadow: state.isFocused ? '0 0 0 1px #F13024' : provided.boxShadow,
      '&:hover': {
        borderColor: state.isFocused ? 'none' : provided.borderColor,
      },
      height: '52px',
      width: '100%',
      borderRadius: '0.5rem',
      paddingLeft: '1rem',
      marginTop: '0.5rem',
      textTransform: 'capitaliz',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      '&:focus': {
        borderColor: '#F13024',
        boxShadow: '0 0 0 1px #F13024'
      },
      '&::placeholder': {
        color: 'rgba(255, 255, 255, 0.3)',
        fontWeight: '300'
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.isSelected ? 'black' : 'white',
      textAlign: 'left',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'none' : 'white',
      color: state.isSelected ? 'red' : 'black'
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        textAlign: 'left', // Alinea el texto a la izquierda en el placeholder
      }
    }
  }

  return <Select id='country' name='country' options={options} styles={customStyles} placeholder='Pais' />
}

export default CountrySelect
