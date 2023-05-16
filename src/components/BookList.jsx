import React, { useContext } from 'react'; 
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext); 
     //condition ? 'render the component to the view' : 'display nothing to display'

    return books.length ? (
        <div className="book-list">
             <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />); 
                })}
             </ul>

        </div>
    ) : (
        <div className="empty">No books to read. Hello free time</div> 
    )



}

export default BookList; 