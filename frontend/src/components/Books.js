import React from 'react'
import { Link } from 'react-router-dom'

class Books extends React.Component {
    
    state = {
        books : []
    }


    componentDidMount() {
        fetch('http://localhost:9292/books')
        .then(response => response.json())
        .then((books) => this.setState({ books }));
    }

    
    renderBookData() {
        return this.state.books.map((book, id) => {
            const {title, genre, author_id, publishing_date, rating} = book
            return (
                <tr key={id}>
                    <td>{title}</td>
                    <td>{genre}</td>
                    <td>{author_id}</td>
                    <td>{publishing_date}</td>
                    <td>{rating}</td>
                </tr>
            )
        })
    }

    


    render() {
        return (
            <div>
               <table>
                   <tbody>
                       <tr>
                           <th>Title</th>
                           <th>Genre</th>
                           <th>Author ID</th>
                           <th>Date Published</th>
                           <th>Rating</th>
                       </tr>
                       {this.renderBookData()}
                   </tbody>
               </table>
            </div>
            
        );     
    }
}

export default Books;

