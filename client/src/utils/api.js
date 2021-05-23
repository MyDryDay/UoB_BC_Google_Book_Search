import axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
    // Get all books
    searchBook: function (q) {
        return axios.get(baseURL + q);
    },
    getBooks: function () {
        return axios.get('/api/books');
    },
    // Delete a book
    deleteBook: function (id) {
        return axios.delete('/api/books/' + id)
            .then(res => res.data);
    },
    // Save a book
    saveBook: function (bookData) {
        return axios.post('/api/books/', bookData);
    },
    // Gets a book
    getBook: function (id) {
        return axios.get('/api/books/' + id);
    }
};