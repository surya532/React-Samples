import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'; 

class Home extends Component{
    state = {
        posts : []
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        const{ posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                      <img src={Pokeball} alt="A pokeball" />
                      <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                      </div>
                    </div>
                  )
                })
        ) : (
            <div className="center">
                no posts render
            </div>
        )
        return (
            <div className="container home">
                <div className="center">
                    <h4>List of Posts</h4>
                    {postList}
                </div>
            </div>
        )
    }
}

export default Home;