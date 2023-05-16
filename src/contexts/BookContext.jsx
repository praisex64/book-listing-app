import { createContext, useState } from 'react'; 
import { v1 as uuidv1 } from 'uuid'; 

export const BookContext = createContext(); 

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfulls', id: 1},
        {title: 'name of the wind', author: 'patrick rothfulls', id: 2},
        {title: 'name of the wind', author: 'patrick rothfulls', id: 3},
 
        ]); 
        

        const addBook = (title, author) => {
            setBooks([...books, {title: title, author: author, id: uuidv1()}]);
        }; 

        const removeBook = (id) => {
            setBooks(books.filter(book => book.id !== id)); 

        };
        return (
            <BookContext.Provider value={{books, addBook, removeBook}}>
                 {props.children}
            </BookContext.Provider>
        )
}

export default BookContextProvider
