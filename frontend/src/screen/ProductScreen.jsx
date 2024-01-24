import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../products';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Rainting from '../components/Rainting';

const ProductScreen = () => {

  const { id: productId } = useParams();
  const product = products.find( p => p._id === productId);

  console.log(product);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">Go Back</Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name}  fluid  />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{ product.name }</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rainting value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: ${product.description}
            </ListGroup.Item>

          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>{ product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroupItem>
                <Button className='btn btn-block' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen