import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";


const Testimonial = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Semua testimonial</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti?</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map(swip => {
              return (
                <Col key={swip.id} className="mb-5">
                  <p className="desc shadow-sm">{swip.desc}</p>
                  <div className="people">
                    <img src={swip.image} alt="img" />
                    <div>
                      <h5 className="mb-1">{swip.name}</h5>
                      <p className="m-0 fw-bold">{swip.skill}</p>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default Testimonial