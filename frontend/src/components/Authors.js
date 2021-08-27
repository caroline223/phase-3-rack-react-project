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
        return this.state.authors.map((author, id) => {
            const {first_name, last_name} = author
            return (
                <tr key={id}>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                </tr>
            )
        });
    }


    render() {
        return (
           <table>
               <tbody>
                   <tr>
                       <th>First Name</th>
                       <th>Last Name</th>
                   </tr>
                   {this.renderAuthors()}
               </tbody>
           </table>
            
        );     
    }
}

export default Authors;

