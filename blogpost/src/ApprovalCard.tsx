import React, { ReactChildren } from "react";

const ApprovalCard = (props: any): JSX.Element => {
  console.log(props);
  return (
    <div className='ui cards'>
      <div className='card'>
        {/* <CommentDetail {{props}}/> */}
        <div className='content'>{props.children}</div>
        <div className='extra content'>
          <div className='ui two buttons'>
            <div className='ui basic green button'>Approve</div>
            <div className='ui basic red button'>Reject</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
