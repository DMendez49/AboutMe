import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import rails_and_react from "../images/rails_and_react.png";

const black = {
  backgroundColor: "grey",
  borderStyle: "solid",
  borderWidth: "1px",
  width: "800px",
  height: "300px"
}

export default RailsView =>

  <center>
    <br /><br />
    <Card
      style={black}
      link="/Projects"
      className="cardi"
    >
      <h1>Rails</h1>
      <Grid columns={2}
        align="center"
        class="sidebyside"
      >
        <Grid.Column >
          <div className="sidebyside">
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
                <a href="https://github.com/DMendez49/rails_lms" target="_blank">
                  <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
                    height="150"
                    width="141"
                  >
                  </img>
                </a>
              </Button>
              <h3>rails_lms</h3>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </Card>
    <br /><br />
  </center>