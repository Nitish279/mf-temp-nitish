import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/slices/cartSlice';

function Header() {
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">AB-KART</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="product" className="nav-link">Product</Link>
                    <Link to="payment" className="nav-link">Payment</Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="dark" disabled>Cart: {cart.length} </Button>
                        <Button variant="dark" onClick={() => dispatch(emptyCart())}>Reset Cart</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;