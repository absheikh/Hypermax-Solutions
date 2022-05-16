import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import hero_img from "../assets/images/hero-img.png";
import about_img from "../assets/images/about-img.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/images/img-1.png";
import img2 from "../assets/images/img-2.png";
import img3 from "../assets/images/img-3.png";
import img4 from "../assets/images/img-4.png";
import g1 from "../assets/images/gallery-img1.png";
import g2 from "../assets/images/gallery-img2.png";
import g3 from "../assets/images/gallery-img3.png";
//partners
import p1 from "../assets/images/partner-1.png";
import p2 from "../assets/images/partner-2.png";
import p3 from "../assets/images/partner-3.png";
import p4 from "../assets/images/partner-4.png";
import p5 from "../assets/images/partner-5.png";
import p6 from "../assets/images/partner-6.png";
import p7 from "../assets/images/partner-7.png";

// Footer logo
import f_logo from "../assets/images/footer-logo.svg";
export default function Home(props) {
  return (
    <div>
      {props.header}

      <div className="wrapper">
        <section id="home" className="mb-5">
          <Row className="hero-bg align-items-center">
            <Col sm={12} md="6" className="hero-left">
              <div className="tagline">Never Stop Learning</div>
              <h2 className="title">
                Turn your ambition in to a success story
              </h2>
              <p className="desc">
                Our institute is a great place to start or continue your career
                journey. That's why we're so dedicated to making the institute a
                great place to study
              </p>
              <div className="buttons d-flex flex-md-row flex-column ">
                <Link to={"/register"} className="mb-3 mb-md-0 primary-button">
                  Register
                </Link>
                <Link to={"#courses"} className="ms-0 ms-md-5 secondary-button">
                  See Courses
                </Link>
              </div>
            </Col>
            <Col className="hero-right d-none d-md-block" md="6">
              <img src={hero_img} />
            </Col>
          </Row>
        </section>
        <section className="mb-5" id="about-us">
          <Row className="about-us">
            <Col md={6}>
              <img src={about_img} className="about-img" />
            </Col>
            <Col md={5} className="ms-0 ms-md-5">
              <h2 className="s-title">About us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to={"/about"} className="secondary-button">
                Learn more
              </Link>
            </Col>
          </Row>
        </section>
        <section className="mb-5" id="courses">
          <Row className="courses">
            <h2 className="s-title-center">Our Courses</h2>
            <span className="subtitle">Get the course of your choice</span>

            <Col md={3}>
              <Col md={12} className="courses-card mb-3 mb-md-0">
                <img src={img1} />
                <div>
                  <span className="duration">
                    <i className="fas fa-clock mt-3"></i> 3 Weeks
                  </span>
                  <h4>Computer Operation</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    di...
                  </p>
                  <span className="price mt-3 mb-3">&#8358;12,500</span>
                  <div className="apply-now d-flex justify-content-center">
                    <Link to={"/apply"} className="secondary-button">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md={3}>
              <Col md={12} className="courses-card mb-3 mb-md-0">
                <img src={img2} />
                <div>
                  <span className="duration">
                    <i className="fas fa-clock mt-3"></i> 3 Weeks
                  </span>
                  <h4>Web Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    di...
                  </p>
                  <span className="price mt-3 mb-3">&#8358;10,000</span>
                  <div className="apply-now d-flex justify-content-center">
                    <Link to={"/apply"} className="secondary-button">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md={3}>
              <Col md={12} className="courses-card mb-3 mb-md-0">
                <img src={img3} />
                <div>
                  <span className="duration">
                    <i className="fas fa-clock mt-3"></i> 3 Weeks
                  </span>
                  <h4>App Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    di...
                  </p>
                  <span className="price mt-3 mb-3">&#8358;12,500</span>
                  <div className="apply-now d-flex justify-content-center">
                    <Link to={"/apply"} className="secondary-button">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md={3}>
              <Col md={12} className="courses-card mb-3 mb-md-0">
                <img src={img4} />
                <div>
                  <span className="duration">
                    <i className="fas fa-clock mt-3"></i> 3 Weeks
                  </span>
                  <h4>Graphics Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    di...
                  </p>
                  <span className="price mt-3 mb-3">&#8358;12,500</span>
                  <div className="apply-now d-flex justify-content-center">
                    <Link to={"/apply"} className="secondary-button">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>

            {/* <div className="next-prev mt-3 ms-0">
              <div className="next">
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className="prev">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div> */}
            <div className="d-flex justify-content-center mt-5">
              <Link to={"/courses"} className="secondary-button">
                See All
              </Link>
            </div>
          </Row>
        </section>
        <section className="gallery-bg mb-5" id="gallery">
          <Row className="gallery">
            <h2 className="s-title-center">Gallery</h2>
            <span className="subtitle mb-3">
              Check out our convenient learning environment
            </span>
            <Col md={4} className="mb-3 mb-md-0">
              <Col md={12} className="img-gallery">
                <img src={g1} id="img" />
                <span className="img-desc">School Building</span>
              </Col>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <Col md={12} id="img-gallery">
                <img src={g2} />
              </Col>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <Col md={12} id="img-gallery">
                <img src={g3} />
              </Col>
            </Col>
            <div className="d-flex justify-content-center mt-3">
              <Link to={"/gallery"} className="secondary-button">
                See more...
              </Link>
            </div>
          </Row>
        </section>
        <section className="news-bg mb-5" id="news">
          <Row className="news">
            <h2 className="s-title-center">News</h2>
            <span className="subtitle mb-3">Get latest update from us</span>
            <Col md={4}>
              <Col md={12} className="news-card mb-3 mb-md-0">
                <div>
                  <h4>Batch B Admision Starts</h4>
                  <span className="date">Sunday 12, 2019</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    di sit amet, consectetur adipisicing elit sed di...
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to={"/read more"} className="secondary-button">
                      Read more...
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md={4}>
              <Col md={12} className="news-card mb-3 mb-md-0">
                <div>
                  <h4>New Courses Added</h4>
                  <span className="date">Sunday 12, 2019</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    di sit amet, consectetur adipisicing elit sed di...
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to={"/read more"} className="secondary-button">
                      Read more...
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md={4}>
              <Col md={12} className="news-card mb-3 mb-md-0">
                <div>
                  <h4>2019 Graudation Event</h4>
                  <span className="date">Sunday 12, 2019</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    di sit amet, consectetur adipisicing elit sed di...
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to={"/read more"} className="secondary-button">
                      Read more...
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>

            <div className="d-flex justify-content-center mt-3">
              <Link to={"/gallery"} className="secondary-button">
                See All
              </Link>
            </div>
          </Row>
        </section>
        <section className="mb-5" id="partners">
          <Row className="">
            <h2 className="s-title">Partners</h2>
            <Col>
              <div className="d-flex justify-content-space-between partners-bg partners py-5">
                <img src={p1} className="mb-5 mb-md-0" />
                <img src={p2} className="mb-5 mb-md-0" />
                <img src={p3} className="mb-5 mb-md-0" />
                <img src={p4} className="mb-5 mb-md-0" />
                <img src={p5} className="mb-5 mb-md-0" />
                <img src={p6} className="mb-5 mb-md-0" />
                <img src={p7} className="mb-5 mb-md-0" />
              </div>
            </Col>
          </Row>
        </section>
        <section className="contact-bg mb-5" id="contact">
          <Row className="contact">
            <h2 className="s-title-center">Contact Us</h2>
            <span className="subtitle">
              Feel free to contact us using the form below
            </span>
            <Col className="mx-auto" md={6}>
              <Form className="mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    as="textarea"
                    placeholder="Your message"
                    rows={3}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  bsPrefix="primary-button w-100 mb-5"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </section>
        <section className="footer-bg mt-5" id="footer">
          <Row>
            <Col md={4}>
              <Col md={12} className="address">
                <img
                  src={f_logo}
                  // height={48}
                  // width={151}
                  className="mb-3 logo"
                />
                <p>
                  <i className="icon fas fa-phone"></i> +234-907-474-8664,{" "}
                </p>
                <p>
                  <i className="icon fas fa-location-dot"></i> No. 265 Maiduguri
                  Road, opposite Al-Yuma House, Tarauni 700223, Kano{" "}
                </p>
                <p>
                  <i className="icon fas fa-message"></i>
                  <span>info@absheikhtech.com</span>
                </p>
                <div className="social-icons d-flex justify-content-between w-100">
                  <Link to="">
                    <i className="s-icon fab fa-facebook-square"></i>
                  </Link>
                  <Link to="">
                    <i className="s-icon fab fa-twitter-square"></i>
                  </Link>
                  <Link to="">
                    <i className="s-icon fab fa-instagram-square"></i>
                  </Link>
                  <Link to="">
                    <i className="s-icon fab fa-whatsapp-square"></i>
                  </Link>
                </div>
              </Col>
            </Col>

            <Col md={4} className="links">
              <Col md={12}>
                <h4>Important Links</h4>
                <div className="borders mb-3">
                  <div className="border-small"></div>
                  <div className="border-big"></div>
                </div>
                <ul className="footer-links">
                  <li>
                    <Link to={""}>
                      <i className="fas fa-chevron-right"></i> Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <i className="fas fa-chevron-right"></i> About{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <i className="fas fa-chevron-right"></i> Courses{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <i className="fas fa-chevron-right"></i> Gallery{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <i className="fas fa-chevron-right"></i> Contact{" "}
                    </Link>
                  </li>
                </ul>
              </Col>
            </Col>

            <Col md={4} className="newsletter">
              <Col md={12}>
                <h4>Newsletter</h4>
                <div className="borders mb-3">
                  <div className="border-small"></div>
                  <div className="border-big"></div>
                </div>
                <p>
                  Enter your email address to get the latest news, special
                  events and activities delivered right to your inbox.
                </p>
                <Form className="mt-5">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Your email" />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    bsPrefix="primary-button w-100 mb-5"
                  >
                    Subscribe
                  </Button>
                </Form>
              </Col>
            </Col>
            <Col md={12} className="copyright">
              <span>Copyright 2022 - Hypermax Technology Solutions </span>
            </Col>
          </Row>
        </section>
      </div>

      {props.footer}
    </div>
  );
}
