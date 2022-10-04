import React, {Component} from "react";
import avtar from "../../images/avtar.png"
import "./people.css"
class people extends Component {
    state = {  }
    render() { 
        return (
            <div className="people">
              <h2>People</h2>
              <div className="people-container">
                <div className="people-details">
                  <div className="people-dp"><img src={avtar} alt="Avatar" className="logo" /></div>
                  <div className="people-username">@Carlo</div>
                </div>
                <div className="people-details">
                  <div className="people-dp"><img src={avtar} alt="Avatar" className="logo" /></div>
                  <div className="people-username">@Carlo</div>
                </div>
                <div className="people-details">
                  <div className="people-dp"><img src={avtar} alt="Avatar" className="logo" /></div>
                  <div className="people-username">@Carlo</div>
                </div>
              </div>
            </div>
          );
    }
}
 
export default people;