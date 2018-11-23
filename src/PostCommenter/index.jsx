import React from 'react';

import './post-commenter.css';

class PostCommenter extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { comment: '' };
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    }

    render(){
        const { comment } = this.state;
        const { user, faved } = this.props;

        return (
            <div className="ot-post-commenter layout center">
                <div className="ot-dp small">
                    <img src={user.image} alt="" />
                </div>

                <input className="flex" type="text" placeholder="Write a Comment" 
                    value={comment} onChange={this.handleChange} />

                <div className={'ot-post-commenter-actions' + ((!comment.length) ? ' can-like' : '')}>
                    <button className="ot-btn flat">
                        POST
                    </button>
                    <button className="ot-btn action">
                        { !faved && <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg> }
                        { faved && <svg className="ot-post-like-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> }
                    </button>
                </div>
            </div>
        );
    }
}
 
export default PostCommenter;