import React,{Component} from "react";
import "./announcements.css"
class announcements extends Component {
    state = {  }
    render() { 
        return (  
            <div class="announcement-container">
            <h2 >Announcements</h2>
            <div class="announcement-flex">
              <div class="announcement-card">
                <h5 class="announcement-heading">Site Maintenance</h5>
                  <p class="announcement-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod odio at blanditiis tempore quibusdam, enim
                    quasi ex earum aut voluptatem beatae provident sunt cum
                    tenetur inventore incidunt quis. Sequi.
                  </p>
              </div>
              <div class="announcement-card">
                <h5 class="announcement-heading">Site Maintenance</h5>
                  <p class="announcement-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod odio at blanditiis tempore quibusdam, enim
                    quasi ex earum aut voluptatem beatae provident sunt cum
                    tenetur inventore incidunt quis. Sequi.
                  </p>
              </div>
              <div class="announcement-card-last">
                <h5 class="announcement-heading">Site Maintenance</h5>
                  <p class="announcement-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod odio at blanditiis tempore quibusdam, enim
                    quasi ex earum aut voluptatem beatae provident sunt cum
                    tenetur inventore incidunt quis. Sequi.
                  </p>
              </div>
            </div>
        </div>
        );
    }
}
 
export default announcements;