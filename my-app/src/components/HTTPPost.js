import axios from 'axios'
import React, { Component } from 'react'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null,
      }
    }
   postToApi = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', 
    {
        title: 'Hello World',
        body: 'It works!',
        userId: 123,
    })
    .then(response => {
        this.setState({
            apiResponse: response.data
        })
    })
   } 
  render() {
    const {apiResponse} = this.state;
    return (
      <div>
        {
            apiResponse ?
            (<div>
                <h1>{apiResponse.title}</h1>
                <p>{apiResponse.body}</p>
                <p>post id: {apiResponse.id}</p>
                <p>user id: {apiResponse.userId}</p>
            </div>) 
            : (<p>Please click the button above</p>)
        }

        <button onClick={this.postToApi}>
            Create Post
        </button>
      </div>
    )
  }
}

export default HTTPPost