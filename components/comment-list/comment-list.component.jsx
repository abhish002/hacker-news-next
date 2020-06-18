import React from 'react';
import Comment from '../comment/comment.component';

export const CommentList = ({ comments }) => {
    return (
        <React.Fragment>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </React.Fragment>
    )
}

export default CommentList;
