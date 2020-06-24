import React from "react";
import { Card, Button, } from "semantic-ui-react";
import rails_and_react from "../images/rails_and_react.png";

const white = {
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: "1px",
  width: "800px",
  height: "300px"
}

export default ReactView =>

  <center>
    <br /><br />
    <Card style={white}
      className="cardi"
      link="/Projects"
    >
      <h1>React</h1>
          <div class="sidebyside">
            <div>
              <Button
                className="customCardlook"
                color="black">
                <a href="https://github.com/DMendez49/rails_react_Department_store" target="_blank">
                  <img alt="build diagram" src={rails_and_react}
                    height="150"
                    width="141"
                  >
                  </img>
                </a>
              </Button>
              <h3>rails_react_Department_store</h3>
            </div>
            <div>
              <Button
                className="customCardlook"
                color="black">
                <a href="https://github.com/DMendez49/react-Flash-Card/tree/master/src" target="_blank">
                  <img alt="build diagram" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" height="150" width="140"></img>
                </a>
              </Button>
              <h3>react-Flash-Card</h3>
            </div>
          </div>
    </Card>
    <br /><br />
  </center>