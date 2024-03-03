import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus } from "react-icons/fa";
import { ShowContext } from "../context/ShowContext";
function CustomNav({show,cartItems,handleSearchValue,handleShow}) {
  // const {handleShow}=useContext(ShowContext)
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
    {console.log("from CustomNav")}
     
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
         
          <Form className="d-flex">
          <button type="button" class="btn  position-relative mx-2" onClick={()=>handleShow()}>
          <FaCartPlus />
              <span class="position-absolute top-0 start-100 translate-middle px-1 text-white bg-danger border border-light rounded">
                <span class="">{cartItems?.length}</span>
              </span>
            </button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>handleSearchValue(e)}
            />

           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
