import React, { useState } from "react";

const TheirMessage = ({ lastMessage, message, userName }) => {
  const [color] = useState("#2ca3db");
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "34px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: `${color}`,
            color: "white",
            marginLeft: isFirstMessageByUser ? "4px" : "34px",
          }}
        >
          <p>{message.text}</p>
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
