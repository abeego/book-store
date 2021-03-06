export function booksReducer(
  state = {
    books: [],
  },
  action
) {
  switch (action.type) {
    case 'GET_BOOKS':
      return { ...state, books: [...action.payload] };
    case 'POST_BOOK':
      return {
        ...state,
        books: [...state.books, ...action.payload],
        msg: 'Saved! Click to add another.',
        style: 'success',
        validation: 'success',
      };
    case 'POST_BOOK_REJECTED':
      const validation = {};
      action.payload.invalidFields.forEach(field => {
        validation[field] = 'error';
      });

      return {
        ...state,
        msg: action.payload.msg || 'Please, try again',
        validation,
      };
    case 'RESET_BUTTON':
      return { ...state, msg: null, style: null, validation: null };
    case 'DELETE_BOOK':
      if (action.payload === 'select') return state;

      const currentBookToDelete = [...state.books];
      const indexToDelete = currentBookToDelete.findIndex(book => {
        return book.id == action.payload;
      });
      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1),
        ],
      };
    case 'UPDATE_BOOK':
      const currentBookToUpdate = [...state.books];
      const indexToUpdate = currentBookToUpdate.findIndex(book => {
        return book._id === action.payload._id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title,
      };
      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1),
        ],
      };
  }
  return state;
}
