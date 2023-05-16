import React, {useContext } from 'react'; 
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const { removeBook } = useContext(BookContext); 

    return (
        <li>
            <div className="title"> {book.title}</div>
            <div className="title">{book.author}</div>
        </li>
    )
}

export default BookDetails; 