import axios from 'axios';

export function getBooks() {
  return dispatch => {
    axios
      .get('/api/books')
      .then(response => {
        dispatch({type: 'GET_BOOKS', payload: response.data});
      })
      .catch(err => {
        dispatch({type: 'GET_BOOKS_REJECTED', payload: err});
      });
  };
}

export function postBook(book) {
  return dispatch => {
    const { title, description, price } = book;
    const invalidFields = [];

    const validTitle = title
      && typeof title === 'string'
      && title.length <= 45;
    if (!validTitle) invalidFields.push('title'); 

    const validDescription = description
      && typeof description === 'string'
      && description.length;
    if (!validDescription) invalidFields.push('description');

    const validPrice = price
      && typeof price === 'number'
      && price > 0;
    if (!validPrice) invalidFields.push('price');

    const valid = validTitle && validDescription && validPrice;

    if (!valid) {
      dispatch({type: 'POST_BOOK_REJECTED', 
        payload: {msg: `Please, fill in ${invalidFields.map(field => field)} field.`, invalidFields }
      });
    };

    if (valid) {
      axios
      .post('/api/books', book)
      .then(response => {
        dispatch({type: 'POST_BOOK', payload: response.data});
      })
      .catch(err => {
        dispatch({type: 'POST_BOOK_REJECTED', payload: err});
      });
    }
  };
}

export function deleteBook(id) {
  return dispatch => {
    axios
      .delete(`/api/books/${id}`)
      .then(response => {
        dispatch({type: 'DELETE_BOOK', payload: id});
      })
      .catch(err => {
        dispatch({type: 'DELETE_BOOK_REJECTED', payload: err});
      });
  };
}

export function updateBook(book) {
  return {
    type: 'UPDATE_BOOK',
    payload: book,
  };
}

export function resetButton() {
  return {
    type: 'RESET_BUTTON',
  };
}
