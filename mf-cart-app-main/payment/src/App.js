import React, {useState, useEffect} from "react";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const App = () => {
    const cart = useSelector((state) => state.cart.value);
    const [productItems, setProductItems] = useState();
    const [modalShow, setModalShow] = useState(false);
    const getUniqueCartValues = (cart) => {
        let resArr = [];
        cart.filter(function (item) {
            let i = resArr.findIndex(x => (x.id == item.id));
            if (i <= -1) {
                resArr.push({ ...item, qty: 1 });
            }
            else {
                resArr[i].qty = resArr[i].qty ? resArr[i].qty + 1 : 1;
            }
            return null;
        });
        return resArr;
    }

    useEffect(() => {
        setProductItems(getUniqueCartValues(cart))
    }, [cart]);

    return (
        <div className="m-4">
            <h4 className='m-3'><Badge bg="dark">Cart Items: {cart.length}</Badge></h4>
            {productItems && productItems.length > 0 ?
                <><Row xs={1} sm={2} md={5} className="g-4">
                    {productItems.map((item) => (
                        <Col key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                            <Card style={{ width: '18rem' }} bg="dark" text="light">
                                <Card.Header variant="dark">{item.type}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.desciption}
                                    </Card.Text>
                                    <Card.Text>{`Quantity: ${item.qty}`}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                    <Row xs={1} sm={6} className="g-4 my-4">
                        <Col>

                            <Form.Select aria-label="Select Payment" style={{ backgroundColor: "#212529", color: "white" }}>
                                <option value="paytm">Paytm</option>
                                <option value="payu">Payu</option>
                                <option value="phonepe">Phonpe</option>
                                <option value="google_pay">Google Pay</option>
                            </Form.Select>

                        </Col>
                        <Col>
                            <Button variant="dark" className="mx-2" onClick={() => setModalShow(true)}>Proceed</Button>
                        </Col>
                        <Modal
                            size="sm"
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            aria-labelledby="game-over"
                            data-bs-theme="dark"
                            style={{ color: "white"}}
                        >
                            <Modal.Header>
                                <Modal.Title id="game-over">
                                    Game Over!!
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </Row>
                </> :
                <Alert variant="dark">
                    <Alert.Heading>Hey, Nice to see you!!</Alert.Heading>
                    <h5>No items to display in your cart yet.</h5>
                    <span>
                        There is nothing added in your cart. Pls navigate to home/product page and add some products from <strong>AB-KART</strong>.
                    </span>
                </Alert>
            }
        </div>
    )
}
export default App;