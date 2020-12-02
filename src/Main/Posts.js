import React, {Component} from 'react'
import axios from 'axios'
import { Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

class Posts extends Component {

    // state = {
    //     posts: []
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts/')
    //         .then(res => {
    //             let posts = res.data.slice(0, 20);
    //             // console.log(posts);
    //             this.setState({ posts })
    //         });
    // }
    render(){
        console.log(this.props);

        const posts = this.props.posts.length ? (
            this.props.posts.map(post => {
                return(<div className="jumbotron" key={post.id}>
                    <h1>{post.title}</h1>
                    <p className="lead">{post.body}</p>
                    <Link className="btn btn-lg btn-primary" to={"/"+post.id} role="button">View&raquo;</Link>
                </div>);
            })
        ) : (
            <div className="alert alert-primary" role="alert">
                There is no any posts!
            </div>
        );

        return(
            <div className="container mt-2">
            {posts}
            </div>
        );
    }
}

const mapStates = (state) => {
    return{
        posts: state.posts
    };
}
export default connect(mapStates)(Posts);
