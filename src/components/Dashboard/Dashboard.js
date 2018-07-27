import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";

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
        let {userId} = this.props;
        axios.get("/api/posts/:userid");
    }

    render() {
        let mappedPosts = this.state.posts.map((post, i) => {
            <div key={i}>
                <p>{post.title}</p>
                <p>{post.username}</p>
                <p>{post.profile_pic}</p>
            </div>
        })
        return(
            <div>
                <input 
                type="text"
                placeholder="Search by Title"
                onChange={(e) => this.handleChange(e.target.value)} 
                />
                <button>Search</button>
                <button>Reset</button>
                My Posts<input 
                type="checkbox"
                onClick={() => this.toggleCheckBox()}
                />
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