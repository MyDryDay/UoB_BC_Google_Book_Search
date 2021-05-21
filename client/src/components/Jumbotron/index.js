import React from 'react';

const Jumbotron = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='jumbotron'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='h-100 p-5 m-0 text-white bg-dark'>
                            <h1>Search & Save Books Using Google's Book API</h1>
                            <a href='http://www.google.co.uk/books/'>Google Books</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;