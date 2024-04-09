
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../assets/img/hero.png';
import { kelasTerbaru, dataSwiper } from '../data/index';
import { useNavigate } from 'react-router-dom';
import FaqComponent from "../components/FaqComponent";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!</h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nobis illo dolorem autem delectus atque.</p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/kelas")}>Lihat Kelas</button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">Lihat Promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold">Kelas Terbaru</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map(kelas => {
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
          <Row>
            <Col className="text-center">
              <button className="btn btn-success btn-lg rounded-5" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/kelas")}>Lihat Semua Kelas <i className="fa-solid fa-chevron-right ms-1"></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map(swip => {
                return (
                  <SwiperSlide key={swip.id} className="shadow-sm">
                    <p className="desc">{swip.desc}</p>
                    <div className="people">
                      <img src={swip.image} alt="img" />
                      <div>
                        <h5 className="mb-1">{swip.name}</h5>
                        <p className="m-0 fw-bold">{swip.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* FAQ */}
      <FaqComponent />
      {/* FAQ */}
    </div>
  )
}

export default Home