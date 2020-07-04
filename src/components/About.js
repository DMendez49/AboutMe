import React from 'react';
import Navbar2 from "./Navbar2.js";
import { Card, Button, Icon } from "semantic-ui-react";
import like3 from "../images/like3.JPG";
import Footer2 from "../components/Footer2";
import FootPro2 from "../components/FootPro2"
import DevResume from "../files/DevResume.pdf";

const About = () => (
  <>
    <Navbar2 />
    <center className="card" >
      <div class="me">
        <div class="content2">
          <img src={like3} height="450px" width="550px"></img>
        </div>
        <div class="content3">
          <h2>
            hello world
                       </h2>
          <br />
          <div
            class="text">
            <p>
              My Name is David Mendez and I live in beautiful Salt Lake City, Utah.
              My concentration is to build individualized apps & websites.
                            <p>
                Feel free to connect with me by clicking contact option above.
                            </p>
            </p>
          </div>
        </div>
      </div>
      <div
        className="card">
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />

        <h1 class="text">
          <br />
                    Experience
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Resume
                    <span>&nbsp;&nbsp;</span>
          <a href={DevResume} download="David's Resume">
            <Button style={download}>
              <center>
                <Icon name="cloud download"
                  color="blue"
                  size="big">
                </Icon>
              </center>
            </Button>
          </a>
        </h1>
        <br />
        <Card
          className="cardi2"
          link="/About"
        >
          <br />
          <p class="text">
            <header align="left">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

              <img alt="build diagram"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                height="25"
                width="25"
              >
              </img>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                React-Flash-Cards
              </header>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <hr />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div align="left">
              <p>
                <li>
                  Implemented React Router using semantic-ui-react components.
                </li>
                  <li>
                    Performed all crud actions, Create, read, update and delete inside establishment navigation.
                  </li>
                <li>
                  Update all of state backend functionality & acceded UI design using class components, Css, Sass, Scss
               </li>
                <li>
                  <img alt="build diagram"
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    width="20"
                    height="20">
                  </img>
                  <img alt="build diagram"
                    src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
                    width="25"
                    height="25"
                  >
                  </img>
                  <img alt="build diagram"
                    src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png"
                    width="18"
                    height="25">
                  </img>
                  <img alt="build diagram"
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    height="22"
                    width="25"
                  >
                  </img>
                </li>
              </p>
            </div>
            <br />
            <Button
              color='blue inverted'
            >
              <a href="https://react-flash-card.herokuapp.com/" target="_blank">
                <Icon name="react"
                  color="blue"
                  size="big"
                ></Icon>
              </a>
            </Button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Button
              color="red inverted"
            >
              <a href="https://github.com/DMendez49/react-Flash-Card/tree/master/src" target="_blank">
                <Icon name="github"
                  color="red"
                  size="big"
                ></Icon>
              </a>
            </Button>
          </p>
          <br />
        </Card>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Card
          className="cardi2"
          link="/About"
        >
          <br />
          <p class="text">
            <header align="left">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

              <img alt="build diagram"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
                height="25"
                width="25"
              >
              </img>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                DevPoint Labs E-commerce Store
                            </header>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <hr />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div align="left">
              <p>
                <li>
                  This application is running on a Rails backend and a React frontend.
                            </li>
                <li>
                  Designed multiple models, Ruby controllers and Implemented React Router.
                            </li>
                <li>
                  Updated axio libraries rendering custom routes perfomed in Ruby controller's
                            </li>
                <li>
                  <img alt="build diagram"
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    width="20"
                    height="20">
                  </img>
                  <img alt="build diagram"
                    src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
                    width="25"
                    height="25"
                  >
                  </img>
                  <img alt="build diagram"
                    src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png"
                    width="18"
                    height="25">
                  </img>
                  <span>&nbsp;</span>
                  <img alt="build diagram" src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png"
                    height="20"
                    width="20"
                  >
                  </img>
                  <span>&nbsp;</span>
                  <img alt="build diagram"
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    height="22"
                    width="25"
                  >
                  </img>
                  <span>&nbsp;</span>
                  <img alt="build diagram"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
                    height="20"
                    width="20"
                  >
                  </img>
                  <span>&nbsp;</span>
                  <img alt="build diagram"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/807px-Ruby_on_Rails_logo.svg.png"
                    width="20"
                    height="20">
                  </img>
                </li>
              </p>
            </div>
            <br />
            <Button
              color='blue inverted'
            >
              <a href="https://devpoint-store.herokuapp.com/" target="_blank">
                <Icon name="free code camp"
                  color="blue"
                  size="big"
                ></Icon>
              </a>
            </Button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Button
              color="red inverted"
            >
              <a href="https://github.com/devpointlabs/devpoint-store" target="_blank">
                <Icon name="github"
                  color="red"
                  size="big"
                ></Icon>
              </a>
            </Button>
          </p>
          <br />
        </Card>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <Card
          className="cardi2"
          link="/About"
        >
          <br />
          <p class="text">
            <header align="left">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <img alt="build diagram"
                src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png"
                height="25"
                width="25"
              >
              </img>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            Devmendez.com
                            </header>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <hr />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div align="left">
              <p>
                <li>
                  Implemented React Router using semantic-ui-react components.
                            </li>
                <li>
                  Demonstating formspree backend and other Javascript libraries.
                            </li>
                <li>
                  Exceded UI design using class components, Css, Sass, Scss
                  demonstrating my passion for design.
                            </li>
                <li>
                  <img alt="build diagram"
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    width="20"
                    height="20">
                  </img>
                  <img alt="build diagram"
                    src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
                    width="25"
                    height="25"
                  >
                  </img>
                  <img alt="build diagram"
                    src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png"
                    width="18"
                    height="25">
                  </img>
                  <span>&nbsp;</span>
                  <img alt="build diagram"
                    src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png"
                    height="22"
                    width="25"
                  >
                  </img>
                </li>
              </p>
            </div>
            <br />
            <Button
              color='blue inverted'
            >
              <a href="https://www.devmendez.com/" target="_blank">
                <Icon name="js square"
                  color="blue"
                  size="big"
                ></Icon>
              </a>
            </Button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Button
              color="red inverted"
            >
              <a href="https://github.com/DMendez49/portfolio" target="_blank">
                <Icon name="github"
                  color="red"
                  size="big"
                ></Icon>
              </a>
            </Button>
          </p>
          <br />
        </Card>
        <br /><br />
        <br />
        <h1
          class="text"
          style={buttonSpace}
        >
          <br /><br /><br />
                Work Experience
                </h1>
        <br /><br /><br />
        <Card
          className="cardi2"
          link="/About"
        >
          <br />
          <p class="text">
            <header align="left">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <img alt="build diagram" src="https://cdn.worldvectorlogo.com/logos/dell-technologies-logo.svg"
                width="236" height="28" >
              </img>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                         Data Analyst - ​Draper, UT 02/2018 - 05/2019
                        </header>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <hr />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div align="left">
              <p>
                Provided technical support to field support personnel using complex infrastructures, Dell customers and dell distributors.
                Developed resolutions to problems of limited scope and followed standard practices and procedures.
                Also recorded and updated Customer Service call Tracking Databases in a timely and accurate manner.
                Used defined protocols and independent judgment to properly escalate more complex issues to more experienced staff to resolve customer issues in the most expedient manner possible.
                Worked closely with customers to resolve technical issues on various information systems and information storage platforms.
                These issues include all of the following components: Operating Systems (Unix, Windows, and /or MVS, Networking(Ethernet,Fibre Channel, ISCSI), Storage Area networks attached storage, and databases- relational and hierarchical.
                            </p>
            </div>
          </p>

          <br />
        </Card>
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />

        <Card
          className="cardi2"
          link="/About"
        >
          <br />
          <p class="text">
            <header align="left">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <img alt="build diagram" src="https://www.xytrondatarecovery.co.uk/wp-content/uploads/2015/07/sykes-logo.png"
                width="140" height="50">
              </img>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            Knowledge Advisor - ​ Lindon, UT 04/2017 - 02/2018</header>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <hr />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div align="left">
              <p>
                Provided Quality Assurance evaluations for publication 15 requirements for mid-capitalist companies and below from around the Globe.
                Heavly involved in taking ownership in helping business owners find solutions to their challenges.
                Such as acquiring correct deposit frequency and state unemployment insurance rates for W-2s and 1099's.
                            </p>
            </div>
          </p>

          <br />
        </Card>
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />

        <Card
          className="cardi2"
          link="/About"
        >
          <br />
          <p class="text">
            <header align="left">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Instructure_logo.svg/1280px-Instructure_logo.svg.png"
                width="200"
                height="20">
              </img>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Facilitator/Office Coordinator - Cottonwood Heights, UT 08/2015 - 04/2017
            </header>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <hr />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div align="left">
              <p>
                Heavily involved in analyzing and managing all of the inventory while Maintaining inventory accuracy.
                Initiated Thunderbolt installations for Mac, LG, and Samsung Monitors etc.
                Maintained outstanding Client, customer support and satisfaction on a large scale.
                Very Detail-oriented, organized, and possess the ability to multi-task and shift priorities quickly while maintaining control, focus, and professionalism in a fast-paced and dynamic environment.
                            </p>
            </div>
          </p>

          <br />
        </Card>

        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
      </div>
    </center>
    <Footer2 />
  </>
)

const buttonSpace = {
  addingRight: "50px",
}

const download = {
  borderStyle: 'solid',
  borderWidth: '1px',
  background: 'white',
  height: "50px",
}

export default About;