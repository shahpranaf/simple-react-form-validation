import React from "react";

const Message = props => {
    const { message } = props;
    return (
        <div>
            <h3 className="text-center message">{message}</h3>
        </div>
    );
};

export default Message;
