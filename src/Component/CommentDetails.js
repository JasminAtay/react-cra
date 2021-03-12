import React from 'react'

const CommentDetails = ({name, date, text, avatar}) => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={avatar}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {name} 
                        {/* {props.name} */}
                    </a>
                    <div className="metadata">
                        <span className="date">{date}</span>
                    </div>
                    <div className="text">{text}</div>
                </div>
            </div>
    )
}

export default CommentDetails
