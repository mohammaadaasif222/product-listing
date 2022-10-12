import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart3, BsPerson} from "react-icons/bs";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react'

import "./NavBar.css";

function NavBar() {
  return (
    <Navbar className="bor-der p-3 nav-fix" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MOHAMMAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="New Launch" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Top Wear" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bottom Wear" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cosmetics" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Jewellery" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Draps" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Wishful" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Plus sizes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Size" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <BsSearch className='nav-icon'/> */}
          </Form>
          <div>
            <BsPerson className="nav-icon" />
          </div>
          <span className="user">Login</span>
          <BsCart3 className="nav-icon" />
          <span className="user">Cart</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
