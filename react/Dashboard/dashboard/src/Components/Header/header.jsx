import React, { Component } from "react";
// import imgImport from "../../../public/avtar.png"
import "./header.css";
import avtar from "../../images/avtar.png"

class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="top-container">
          <div id="top-left-container">
            <div id="top-left-top-container">
              <div id="magnifying-container">
                <i className="fa-solid fa-magnifying-glass icon"></i>
              </div>
              <div id="searchbar-container">
                <input type="text" name="search-input" id="search-input" />
              </div>
            </div>
            <div id="top-left-bottom-container">
              <div id="profile-image-container">
                <img src={avtar} alt="DP" id="avtar" />
              </div>
              <div id="welcome-container">
                <div id="hi-message">Hi there,</div>
                <div id="name">Ayush Pandya(@py-knight)</div>
              </div>
            </div>
          </div>
          <div id="top-right-container">
            <div id="top-right-top-container">
              <div id="bell-container">
                <i className="fa-regular fa-bell icon"></i>
              </div>
              <div id="right-profile-image">
                <div id="profile-image-small-container">
                  <img src={avtar} alt="profile-picture" id="DP" />
                </div>
                <div id="profile-name">Ayush Pandya</div>
              </div>
            </div>

            <div id="top-right-bottom-container">
              <div className="nav-btn">
                <button className="btn">New</button>
              </div>
              <div className="nav-btn">
                <button className="btn">Upload</button>
              </div>
              <div className="nav-btn">
                <button className="btn">Share</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
