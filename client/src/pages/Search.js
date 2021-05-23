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

    const handleSave = (id) => {
        const book = books.find(book => book.id === id);

        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            link: book.volumeInfo.infoLink,
            image: book.volumeInfo.imageLinks.thumbnail
        })
    }

    return (
        <div>
            <Jumbotron />
            <form className='searchForm'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-9 col-sm-10 col-md-10 col-lg-11'>
                            <SearchForm 
                                name='Search'
                                value={search}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='col-xs-3 col-sm-2 col-md-2 col-lg-1'>
                            <Button
                                className='input-lg input-md input-sm btn-primary'
                                onClick={handleFormSubmit}
                            >Search</Button>
                        </div>
                    </div>
                </div>
            </form>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
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
                                            onClick={() => handleSave(book.id)}
                                            className='btn btn-success viewSave'>
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