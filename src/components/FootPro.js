import React from "react";
import FB from "../images/FB.png"

class FootPro extends React.Component {
  render() {
    return (
      <>
        <div
          class="footsie"
        // style={Footsie}
        >
          <div
            class="Footsie"
          >
            <img
              class="forImg"
              width="150px"
              height="100px"
              src="https://img.icons8.com/cotton/2x/laptop-coding.png"
            >
            </img>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div class="pro-footer">
              Salt Lake City, Utah / DevMendez.com  /  (801) 980-4786
          </div>
          </div>
        </div>

        <div class="footpro">
          <a href="https://www.youtube.com/channel/UCT3WnNy39aTW1Xba8Wh8hGA/about?view_as=subscriber" target="_blank">
            <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/16/16030.png" width="50"></img></a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="https://www.linkedin.com/in/david-mendez-462933145/" target="_blank">
            <img alt="build diagram" src="https://i.ya-webdesign.com/images/linkedin-icon-white-png-7.png" width="50"></img></a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="https://github.com/DMendez49" target="_blank">
            <img alt="build diagram" src="http://pngimg.com/uploads/github/github_PNG20.png" width="80" height="50"></img></a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="https://www.facebook.com/profile.php?id=100001773444206&ref=bookmarks" target="_blank">
            <img alt="build diagram" src={FB} width="50"></img></a>
        </div>
      </>
    )
  }
};

export default FootPro;