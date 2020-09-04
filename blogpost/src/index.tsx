import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = (): JSX.Element => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Today at 2:00PM'
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Luiz'
          timeAgo='Today at 1:30PM'
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
