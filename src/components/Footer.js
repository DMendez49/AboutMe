import React from "react";
import FB from "../images/FB.png";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div
          class="footsie"
          style={Footsie}
        >
          <img
            class="forImg"
            width="150px"
            height="100px"
            src="https://img.icons8.com/cotton/2x/laptop-coding.png"
          >
          </img>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div >

            <div class="foots-footer">
              Salt Lake City, Utah / DevMendez.com  /  (801) 980-4786
          </div>
          </div>
        </div>
        <div class="foots">
          <a href="https://www.youtube.com/channel/UCT3WnNy39aTW1Xba8Wh8hGA/about?view_as=subscriber" target="_blank">
            <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/16/16030.png" width="50"></img></a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="https://www.linkedin.com/in/david-mendez-462933145/" target="_blank">
            <img alt="build diagram" src="https://i.ya-webdesign.com/images/linkedin-icon-white-png-7.png" width="50"></img></a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="https://github.com/DMendez49" target="_blank">
            <img alt="build diagram"  style={adjust} src="https://cdn.iconscout.com/icon/free/png-512/github-brand-logo-47401.png" width="90" height="95"
            ></img></a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="https://www.facebook.com/profile.php?id=100001773444206&ref=bookmarks" target="_blank">
            <img alt="build diagram" src={FB} width="50"></img></a>
        </div>
      </>
    )
  }
};

const Footsie = {
  paddingTop: "45px",
  paddingBottom: "130px",
  color: "white",
  fontSize: "20px",
}

const adjust = {
  // paddingTop: "10px"
}

export default Footer;