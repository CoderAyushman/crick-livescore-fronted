'use client';
import Link from 'next/link'
import { Navbar,Container,Nav} from 'react-bootstrap';
const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >🏏Info</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">LiveScore</Nav.Link>
            <Nav.Link href="/upcoming-matches">UpcomingMatches</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavBar