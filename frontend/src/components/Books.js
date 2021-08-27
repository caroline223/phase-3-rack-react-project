import React from 'react'
import BookSearch from '../components/BookSearch';


class Books extends React.Component {
    
    state = {
        books: [],

        searchInput: ''
    }


    componentDidMount() {
        fetch('http://localhost:9292/books')
        .then(response => response.json())
        .then((books) => this.setState({  books }));
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

    
    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.books.filter(book => book.genre.toLowerCase().includes(input.toLowerCase())) 

    }

    handleSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ books: [...this.state.books]})
        } else {
            this.setState({ books: this.filterSearchByInput(event.target.value)})
        }

    }


    render() {
        return (
            <div>
                <h1>Catalog</h1>
                <BookSearch handleSearchInput={this.handleSearchInput} />
               <table>
                   <tbody>
                       <tr>
                           <th>Title</th>
                           <th>Genre</th>
                           <th>Author ID</th>
                           <th>Date Published</th>
                           <th>Rating (out of 10)</th>
                       </tr>
                       {this.renderBookData()}
                   </tbody>
               </table>
            </div>
            
        );     
    }
}

export default Books;

