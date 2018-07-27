import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            search: "",
            userposts: false
        }

        this.getPosts = this.getPosts.bind(this);
    }
    componentDidMount() {
        this.getPosts();
    }

    handleChange(val) {
        this.setState({
            search: val
        });
    }

    toggleCheckBox() {
        this.setState({
            userposts: !this.state.userposts
        });
    }

    getPosts() {
        let { userId } = this.props;
        let { userposts, search } = this.state;
        axios.get(`/api/posts/${userId}?userposts=${userposts}&search=${search}`).then(res => {
            this.setState({
                posts: res.data
            });
        });
    }

    render() {
        console.log(this.state.posts);

        let mappedPosts = this.state.posts.map((post, i) => {
            return (
                <div key={i}>
                <div>Title:{post.title}     by: {post.username} <img src={post.profile_pic} alt="user pic" style={{height: "50px", width: "auto"}}/></div>
                </div>
                
            );

        })
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search by Title"
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <button onClick={this.getPosts}>Search</button>
                <button>Reset</button>
                My Posts<input
                    type="checkbox"
                    onClick={() => this.toggleCheckBox()}
                />
                {mappedPosts}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userId
    }
}

export default connect(mapStateToProps)(Dashboard);