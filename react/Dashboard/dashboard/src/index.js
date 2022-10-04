import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header/header";
import Dashboard from "./Components/Dashboard/dashboard";
import Project from "./Components/Project/project";
import Announcements from "./Components/Announcement/announcement";
import People from "./Components/People/people"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <div className="full-website">
      <Dashboard />
      <div className="main-section">
        <Header />
        <div className="bottom-container">
          <Project />
          <div className="highlights">
            <Announcements/>
            <People/>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
