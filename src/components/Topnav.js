import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Wrapper = styled.div`
    .navbar-color{
        background-color: #141414;
    }
`

const Topnav = () => {
    return (
        
        <Wrapper>
            <Navbar className="navbar-color" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link className ='text-light' href="#home">Home</Nav.Link>
                <Nav.Link className ='text-light' href="#features">Features</Nav.Link>
                <Nav.Link className ='text-light' href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </Wrapper>
        
    )
}

export default Topnav;