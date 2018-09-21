import React, { Component } from 'react';
import Axios from 'axios';

class Post extends Component{
    state = {
        post : null
    }
    componentDidMount(){
        let id = this.props.match.params.path_id;
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
            .then(res => {
                this.setState({
                    post: res.data
            })
        })
    }
    render(){
        const post = this.state.post ? (
            <div className="post">
                <h2 className="center blue-text">{this.state.post.title}</h2>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">
                Loading Post
            </div>
        )
        return(
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

export default Post;