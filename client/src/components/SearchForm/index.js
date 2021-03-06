import React from 'react';

const SearchForm = (props) => {
    return(
        <div className='input-group input-group-lg input-group-md input-group-sm'>
            <input
                className='form-control'
                type='text'
                placeholder='Search for a book...'
                {...props} 
            />
        </div>
    )
}

export default SearchForm;