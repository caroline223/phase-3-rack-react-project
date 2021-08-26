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

    renderBooks = () => {
        return this.state.books.map((book) => {
            return <ul>
                    <li>{book.title}</li>
                    <li>{book.genre}</li>
                    <li>{book.author_id}</li>
                    <li>{book.publishing_date}</li>
                    <br />
                </ul>
        });
    }


    render() {
        return (
            <div>
                
                <ul>{this.renderBooks()}</ul>
            </div>
            
        );     
    }
}

export default Books;

