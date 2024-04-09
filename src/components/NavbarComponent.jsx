import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { navLinks } from '../data/index';
import { NavLink, Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener('scroll', changeBackgroundColor);
  });
  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Link to="/" className='brand-link fs-3 fw-bold'>
            <Navbar.Brand>ngoding.</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map(link => {
                return <div className='nav-link' key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  } end>{link.text}</NavLink>
                </div>
              })}
            </Nav>
            <div className='text-center'>
              <button className='btn btn-outline-danger rounded-1 btn-sm'>Join Us</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent