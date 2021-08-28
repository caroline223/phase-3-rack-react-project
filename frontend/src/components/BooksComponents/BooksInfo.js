import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class BooksInfo extends React.Component {

    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {title, genre, author_id, publishing_date, rating, image_url, price} = this.props.books
        return (
          <Card style={layout.card}>
              <Image src={image_url} />
              <Card.Content >
                  <Card.Header>
                      {title} <br />
                      {price}
                  </Card.Header>
                  <Card.Description>
                      {genre}
                      <br />
                      {author_id}
                      <br />
                      {publishing_date}
                      <br />
                      {rating}
                  </Card.Description>
              </Card.Content>
          </Card>
        )
    }
}

export default BooksInfo;