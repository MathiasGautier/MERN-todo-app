import React from "react";

const Message = (props) => {
  if (props.message.msgError) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {props.message.msgBody}
      </div>
    );
  } else {
    return (
      <div className="alert alert-primary text-center" role="alert">
        {props.message.msgBody}
      </div>
    );
  }
};

export default Message;
