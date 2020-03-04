import React from 'react';
import './search-box.style.css';
// functinal component: no constructor to get initial state; no life cycle methods;
// just get props and render

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={ placeholder }
        onChange={ handleChange }
    />
)