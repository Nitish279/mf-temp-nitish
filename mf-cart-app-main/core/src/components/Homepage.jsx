import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/slices/cartSlice';
import Spinner from 'react-bootstrap/Spinner';

function Homepage() {
  const dispatch = useDispatch();
  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  },[])

  const itemList = [
    {
      id: 1,
      type: 'In-House Product',
      img: "https://picsum.photos/id/1/200/300",
      name: "Product 1",
      desciption: 'Lorem Ipsum Lorem Ipsum'
    },
    {
      id: 2,
      type: 'In-House Product',
      img: "https://picsum.photos/id/10/200/300",
      name: "Product 2",
      desciption: 'Ipsum Lorem Ipsum Lorem'
    },
    {
      id: 3,
      type: 'In-House Product',
      img: "https://picsum.photos/seed/picsum/200/300",
      name: "Product 3",
      desciption: 'Lorem Ipsum Lorem Ipsum'
    },
    {
      id: 4,
      type: 'In-House Product',
      img: "https://picsum.photos/id/237/200/300",
      name: "Product 4",
      desciption: 'Ipsum Lorem Ipsum Lorem'
    }
  ]

  return (
    <div className='m-4'>
      <h4 className='m-3'><Badge bg="dark">In-House Product List</Badge></h4>
      <Spinner animation="border" variant="dark" style={{ visibility: !isLoading ? "hidden" : "visible" }}/>
      <Row xs={1} sm={2} md={4} className="g-4" style={{ visibility: isLoading ? "hidden" : "visible" }}>
        {itemList.map((item) => (
          <Col key={item.id} style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: '18rem' }} bg="dark" text="light">
              <Card.Img variant="top" src={item.img}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.desciption}
                </Card.Text>
                <Button variant="light" onClick={() => dispatch(addItemToCart(item))}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Homepage;