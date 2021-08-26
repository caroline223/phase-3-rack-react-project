import React from 'react'


class Authors extends React.Component {
    
    state = {
        authors : []
    }


    componentDidMount() {
        fetch('http://localhost:9292/authors')
        .then(response => response.json())
        .then((authors) => this.setState({ authors }));
    }

    renderAuthors = () => {
        return this.state.authors.map((author) => {
            return <p>{author.first_name} {author.last_name}</p>
        });
    }


    render() {
        return (
            <div>
                <ul>{this.renderAuthors()}</ul>
            </div>
            
        );     
    }
}

export default Authors;

