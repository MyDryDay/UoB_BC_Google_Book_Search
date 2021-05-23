import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron/index';
import { Booklist, BookItem } from '../components/BookComponents/index';

import API from '../utils/api';

const Saved = () => {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = () => {
        API.getBooks('/api/books')
            .then(
                res => setSaved(res.data)
            )
            .catch(
                err => console.log(err)
            );
    }

    const handleDelete = (id) => {
        API.deleteBook(id)
            .then(
                (res) => {
                    loadBooks();
                }
            )
            .catch(
                err => console.log(err)
            );
    }

    return (
        <div>
            <Jumbotron />
            <Booklist>
                {saved.map(book => (
                    <BookItem
                        key={book._id}
                        title={book.title}
                        authors={book.authors.join(', ')}
                        description={book.description}
                        link={book.link}
                        image={book.image}
                        Button={() => (
                            <button 
                                onClick={() => handleDelete(book._id)}
                                className='btn btn-danger'>
                            Delete
                            </button>
                        )}
                    />
                ))}
            </Booklist>
        </div>
    )
}

export default Saved;