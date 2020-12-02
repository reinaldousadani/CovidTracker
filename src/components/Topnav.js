import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { RiVirusLine } from "react-icons/ri";

const Wrapper = styled.div`
  .navbar-color {
    background: #141414;
  }
`;

const Topnav = () => {
  return (
    <Wrapper>
      <Navbar className="navbar-color fixed-top" variant="light">
        <Navbar.Brand className="brand" href="/">
          <RiVirusLine className="brand-icon" size={32} color="white" />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="text-light" href="/countries">
            Countries
          </Nav.Link>
          <Nav.Link className="text-light" href="/indonesia">
            Indonesia
          </Nav.Link>
          <Nav.Link className="text-light" href="/indoprovince">
            Indonesia's Province
          </Nav.Link>
        </Nav>
      </Navbar>
    </Wrapper>
  );
};

export default Topnav;
