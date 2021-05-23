import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron/index';
import SearchForm from '../components/SearchForm/index';
import Button from '../components/Button/index';
import { Booklist, BookItem } from '../components/BookComponents/index';
import API from '../utils/api';

const Search = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const handleInputChange = (e) => {
        const {value} = e.target;
        setSearch(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.searchBook(search)
            .then(
                res => setBooks(res.data.items)
            )
            .catch(
                err => console.log(err)
            );
    }

    return (
        <div>
            <Jumbotron />
            <form>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-9 col-sm-10'>
                            <SearchForm 
                                name='Search'
                                value={search}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='col-xs-3 col-sm-2'>
                            <Button
                                className='input-lg'
                                onClick={handleFormSubmit}
                            >Search</Button>
                        </div>
                    </div>
                </div>
            </form>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-10 col-sm-8'>
                        <Booklist>
                            {books.map(book => (
                                <BookItem
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    authors={
                                        !book.volumeInfo.authors ? 'Could not find author(s)' : book.volumeInfo.authors.join(', ')                                    
                                    }
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.infoLink}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    Button={() => (
                                        <button
                                            // onClick
                                            className='btn saveBtn'>
                                        Save Book
                                        </button>
                                    )}
                                />
                            ))}
                        </Booklist>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Search;