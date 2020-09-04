import React from "react";

export class CommentProps {
  author: string = "Unknown";
  timeAgo?: string;
  content?: string;
  avatar?: string;
}

const CommentDetail = (props: CommentProps): JSX.Element => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
