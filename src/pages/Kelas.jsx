
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

import FaqComponent from "../components/FaqComponent";

const Kelas = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Semua Kelas</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map(kelas => {
              const stars = ['star1', 'star2', 'star3', 'star4', 'star5'];
              return <Col key={kelas.id} className="shadow-sm rounded" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img className="mb-5 rounded-top" src={kelas.image} alt="image" />
                <div className="star mb-2 px-3">
                  {stars.map(star => <i key={star} className={kelas[star]}></i>)}
                </div>
                <h5 className="mb-5 px-3">{kelas.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="fw-bold m-0 text-primary">{kelas.price}</p>
                  <button className="btn btn-outline-danger rounded-1">{kelas.buy}</button>
                </div>
              </Col>
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default Kelas