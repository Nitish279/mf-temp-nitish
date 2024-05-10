import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { addItemToCart } from 'core/Slice';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const dispatch = useDispatch();
  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  },[])

  const itemList = [
    {
      id: 5,
      type: 'External Product',
      img: "https://picsum.photos/seed/picsum/200/300",
      name: "Product 1 - ext",
      desciption: 'Lorem Ipsum Lorem Ipsum'
    },
    {
      id: 6,
      type: 'External Product',
      img: "https://picsum.photos/id/237/200/300",
      name: "Product 2 - ext",
      desciption: 'Ipsum Lorem Ipsum Lorem'
    },
    {
      id: 7,
      type: 'External Product',
      img: "https://picsum.photos/id/1/200/300",
      name: "Product 3 - ext",
      desciption: 'Lorem Ipsum Lorem Ipsum'
    },
    {
      id: 8,
      type: 'External Product',
      img: "https://picsum.photos/id/10/200/300",
      name: "Product 4 - ext",
      desciption: 'Ipsum Lorem Ipsum Lorem'
    }
  ]

  return (
    <div className='m-4'>
      <h4 className='m-3'><Badge bg="dark">External Product List</Badge></h4>
      <Spinner animation="border" variant="dark" style={{ visibility: !isLoading ? "hidden" : "visible" }}/>
      <Row xs={1} sm={2} md={4} className="g-4" style={{ visibility: isLoading ? "hidden" : "visible" }}>
        {itemList.map((item) => (
          <Col key={item.id} style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: '18rem' }} bg="dark" text="light">
              <Card.Img variant="top" src={item.img} />
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

export default App;