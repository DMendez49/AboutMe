import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
import { Table, Card, } from "semantic-ui-react";
import favicon from "../images/favicon.png";
import Footer from "../components/Footer";
import code from "../movies/Rocket.mov";
import physics from "../movies/physics.mov";

const Home = () => (
  <>
    <head>
      <title>Portfolio</title>
      <Link rel="styleSheet" href="App.css"></Link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="shortcut icon" type="image/png" href={favicon}></link>
    </head>
    <div class="section-top">
      <div class="content">
        <br />
        <h1 class="click">David Mendez</h1>
        <br /><br />
        <NavLink to="/About">
          <a href="#"> About </a>
        </NavLink>
      </div>
    </div>
    <div class="background">
      <body class="background" >
        <video src={code} autoPlay="true" loop="true" class="vid"></video>
        <video src={physics} autoPlay="true" loop="true" class="vid"></video>
        <section class="header-overlay">
          <div class="scroll">
            <span>
              <center>
                <br />
                <Card
                  link="/"
                  className="cardi"
                >
                  <br />
                  <p>
                    <p style={red}> My name is David Mendez, </p>
                      I am a software developer based in Salt Lake City.
                      I specialize in full stack technology,
                      leveraging tooling on the front-end and back-end. I develop & design websites,
                      from wireframe to implementation, and consult for a solution tailored to your business.
                      These are the technologies I currently use.
                  </p>
                  <br />

                </Card>
              </center>
            </span>
          </div>
        </section>
        <center
        // class='card22'
        >
          <p class="header-overlay2">
            <div className='sidebyside'>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
                      width="40"
                      height="40"
                    >
                    </img>
                    HTML
                  </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png"
                      width="40"
                      height="40">
                    </img>
                    CSS
                  </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
                      width="40"
                      height="40">
                    </img>
                    Ruby
                  </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/807px-Ruby_on_Rails_logo.svg.png"
                      width="40"
                      height="40">
                    </img>
                    Rails
                  </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://image.flaticon.com/icons/png/512/226/226777.png"
                      width="40"
                      height="40">
                    </img>
                    Java
                  </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png"
                      width="40"
                      height="40">
                    </img>
                    JavaScript
                  </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                      width="40"
                      height="40">
                    </img>
                    React
                  </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img
                      alt="build diagram"
                      src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                      width="40"
                      height="40">
                    </img>
                    Git
                   </div>
                </span>
              </section>
              <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
              <script>
                AOS.init();
            </script>
            </div>
          </p>
        </center>
        <section class="header-overlay3">
          <center>
            <Card
              className="cardi"
              link="/"
            >
              <br /><br />
              <p style={black} class="height">
                My love for computer science grew more with my time at <strong>Instructure</strong>.
                I am a self taught programmer, and I expanded my skills by completing
                the following courses at <strong>Salt Lake Comunity College.</strong>
                </p>
              <br /><br />
            </Card>
          </center>
        </section>
        <center >
          <p
            class="header-overlay4"
          >
            <br /><br /><br />
            <Table
              className="c"
              link="/"
              basic
            >
              <div class="extra">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell style={red}>Class Id:</Table.HeaderCell>
                    <Table.HeaderCell style={red}>Class Name:</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>1400</Table.Cell>
                    <Table.Cell> Fundamentals Of Computer Science</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>1410</Table.Cell>
                    <Table.Cell>Object Oriented programming</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>2420</Table.Cell>
                    <Table.Cell>Data Structures & Algorithms</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </div>
            </Table>
          </p>
        </center>
        <div class="header-overlay4ish">
          <Card
            className="cardi"
            link="/"
          >
            <br />
            <center>
              <p style={black} class="height2">
                In addition to my studies I attended a Coding Boot-Camp with the University Of Utah
                at <strong> DevPoint Labs.</strong>
                I will continue this journey by challenging myself daily.
            </p>
              <p style={red} class="click">
                Click "About" for more information listed above.
            </p>
            </center>
          </Card>
        </div>
        <h3 class="school">Schools I've attended</h3>
        <div class="header-overlay5">
          <center style={padding}>
            <div class="editForPhone">
              <div class="sidebyside">
                <div class="Utah">
                  <img alt="build diagram" src="https://umc.utah.edu/wp-content/uploads/sites/15/2015/01/BlockU_400px.png"
                    width="180" height="167" style={UT}>
                  </img>
                </div>
                <img alt="build diagram" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2475/s300/beaker-white-256.png"
                  width="100" height="91">
                </img>
                <img alt="build diagram" src="https://i.slcc.edu/institutionalmarketing/images/logo/SLCC%20Bug%20Stacked%202017%20color.png"
                  width="135" height="91"
                  style={SLCC}
                >
                </img>
              </div>
            </div>
          </center>
        </div>
      </body>
    </div>
    <Footer />
  </>
)

const red = {
  color: "Darkred",
}

const black = {
  color: "black",
}

const UT = {
  position: "relative",
  top: "-37px",
}

const padding = {
  paddingRight: "70px"
}

const SLCC = {
  paddingLeft: "50px"
}

const Vegeta = {
  // this is to test update
}


export default Home;


