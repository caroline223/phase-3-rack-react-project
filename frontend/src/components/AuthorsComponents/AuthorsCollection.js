import React from 'react' 
import AuthorsInfo from './AuthorsInfo'
import { Card } from 'semantic-ui-react'


class AuthorsCollection extends React.Component {

    render() {
        return (
            <Card.Group itemsPerRow={4}>
                {this.props.authors.map((authorObj, id) => <AuthorsInfo key={id} authors={authorObj} />)}
            </Card.Group>
        )
    }

}

export default AuthorsCollection;