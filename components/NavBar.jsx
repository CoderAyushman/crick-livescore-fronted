'use client';
import Link from 'next/link'
import { Navbar,Container,Nav} from 'react-bootstrap';
const NavBar = () => {
  return (
    <>
    <div className="fixed w-full  overflow-hidden z-10 block">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand >🏏Info</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-center'>LiveScore</Nav.Link>
            <Nav.Link href="/upcoming-tours" className='text-center'>UpcomingTours</Nav.Link>
            <Nav.Link href="/past-tours"className='text-center' >PastTours</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    </>
  )
}

export default NavBar