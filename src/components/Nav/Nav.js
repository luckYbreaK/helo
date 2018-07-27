import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function Nav(props) {
    let { username, profile, location } = props;
    // <div>
    //     {location.pathname === "/" ?
    //         <div></div>
    //         :
    //         <div>
    //             <img src={profile} alt="to come later" />
    //             <p>{username}</p>
    //             <Link to="/dashboard"><button>Home</button></Link>
    //             <Link to="/new"><button>New Post</button></Link>
    //             <Link to="/"><button>Logout</button></Link>
    //         </div>
    //     }
    // </div>
    return (
        <div>
            <img src={profile} alt="to come later" />
            <p>{username}</p>
            <Link to="/dashboard"><button>Home</button></Link>
            <Link to="/new"><button>New Post</button></Link>
            <Link to="/"><button>Logout</button></Link>
        </div>
    );
}

function mapStateToStore(state) {
    return {
        username: state.username,
        profile: state.profile
    }
}

export default connect(mapStateToStore)(withRouter(Nav));