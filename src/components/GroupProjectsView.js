import React from "react";
import { Card, Button } from "semantic-ui-react";
import rails_and_react from "../images/rails_and_react.png";


const white = {
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: "1px",
  width: "800px",
  height: "300px"
}

export default GroupProjectsView =>
  <>
    <center>
      <br /><br />
      <Card
        style={white}
        className="cardi"
        link="/Projects"
      >
        <h1>Rails & React</h1>
        <div class="sidebyside">

          <div>
            <Button
              color="black"
              className="customCardlook">
              <a
                href="https://github.com/DMendez49/Rails_HackTrips" target="_blank">
                <img
                  alt="build diagram"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/807px-Ruby_on_Rails_logo.svg.png"
                  height="150"
                  width="141"
                >
                </img>
              </a>
            </Button>
            <h3>Rails_HackTrips</h3>
          </div>
          <div>
            <Button
              color="black"
              className="customCardlook">
              <a href="https://github.com/DMendez49/DevPointLabs_Store" target="_blank">
                <img
                  alt="build diagram"
                  src={rails_and_react}
                  height="150"
                  width="141"
                >
                </img>
              </a>
            </Button>
            <h3>DevPointLabs_Store</h3>
          </div>
          <div>
            <Button
              color="black"
              className="customCardlook">
              <a
                href="https://github.com/DMendez49/rails_react_Utoob" target="_blank">
                <img
                  alt="build diagram"
                  src={rails_and_react}
                  height="150"
                  width="141"
                >
                </img>
              </a>
            </Button>
            <h3>rails_react_Utoob</h3>
          </div>
        </div>
      </Card>
      <br /><br />
    </center>
  </>