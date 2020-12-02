import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


class Post extends Component{
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     console.log(id);
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data 
    //             })
    //             console.log(this.state);
    //         });
    // }
    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/Posts');
    }
    render(){
        console.log(this.props);
        const post = this.props.post ? (
            <div className="starter-template" key = {this.props.post.id}>
                <h1>{this.props.post.title}</h1>
                <p className="lead">{this.props.post.body}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>

        ) : (
            <p>Loading...</p>
        );
        return(
            <div className="container">
                {post}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id; 
    return{
        post: state.posts.find(post => post.id == id)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let id = ownProps.match.params.post_id; 
    return {
        deletePost: () => dispatch({type: 'DELETE_POST', id: id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);