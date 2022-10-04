import React, { Component } from "react"

class PostList extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        userId : ' ',
        title : ' ',
        body : ' '
     }
   }
    submitHandler= event =>{
        console.log(this.state)
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        const {userId, title, body} = this.state;
        return (
            <div><form onSubmit={this.submitHandler}>
                <div>
                    <label>User Id</label>
                    <input type="text" name="useId" value={userId} onChange={this.changeHandler} />
                </div>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="">Body</label>
                    <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default PostList