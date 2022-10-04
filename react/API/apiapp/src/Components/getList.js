import React, {Component} from "react";
import axios from "axios"


export class getList extends Component {
  constructor(props) {
        super(props);
    
        this.state = {
          posts: [],
        };
      }
  componentDidMount() {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((Response) => {
            console.log(Response);
            this.setState({posts:Response.data})
          })
          .catch((error) => {
            console.log(error);
          });
    
      }
  render() {
    return (
      <div>getList</div>
    )
  }
}

export default getList

