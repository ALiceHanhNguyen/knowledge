import React from 'react';

import {user} from '../../const';

export const SearchSession = ({ value, handleSubmit, handleChange }) => (
    <div className='container'>
      <form className='subscribe-form' onSubmit={ handleSubmit }>
        <input type='text' placeholder={ user['search.title'] } onChange={ handleChange } value={ value } />
        <input type='submit' value={ user['discovery'] } disabled={ !value || false } />
      </form>
    </div>
);
