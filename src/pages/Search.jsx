import React from 'react';
import '../Styles/search.css';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className='search-container'>
      <Link to='/'>
        <RxCross2 className='close-search' />
      </Link>
      <input
        type='text'
        name=''
        id=''
        placeholder='Search key...'
        className='search-bar'
      />
    </div>
  );
};

export default Search;
