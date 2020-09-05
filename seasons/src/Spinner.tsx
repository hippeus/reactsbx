import React from "react";

interface SpinnerProps {
  message?: string;
}

const Spinner = (props: SpinnerProps): JSX.Element => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

// Setting default Props on function component
Spinner.defaultProps = {
  message: "Loading....",
};

export default Spinner;
