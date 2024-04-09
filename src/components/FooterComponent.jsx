import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/kelas', label: 'Kelas' },
    { path: '/testimonial', label: 'Testimonial' },
    { path: '/faq', label: 'FAQ' },
    { path: '/syaratketen', label: 'Syarat & Ketentuan' }
  ];
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">ngoding.</h3>
            <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum amet delectus et at veritatis, atque repudiandae eius repellendus ipsum debitis.</p>
            <div className="no mb-2 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123 456 789</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa fa-envelope"></i>
                <p className="m-0">example@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            {menuItems.map((menuItem, index) => (
              <Link key={index} to={menuItem.path}>{menuItem.label}</Link>
            ))}
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-5">Subscribe untuk mendapatakan info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} By Ngoding All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent