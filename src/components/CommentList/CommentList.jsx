import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => {
  if (!post.comments) {
    return (
      <div className="CommentList" data-cy="NoCommentsMessage">
        No comments yet
      </div>
    );
  }

  return (
    <div className="CommentList">
      {post.comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
