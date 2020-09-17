export const addBookToCart = obj =>({
    type: 'ADD_BOOK_TO_CART',
    payload: obj
});

export const removeBookFromCart = id =>({
    type: 'REMOVE_BOOK_FROM_CART',
    payload: id
});

export const removeLastBookFromCart = id =>({
    type: 'REMOVE_LAST_BOOK_FROM_CART',
    payload: id
});