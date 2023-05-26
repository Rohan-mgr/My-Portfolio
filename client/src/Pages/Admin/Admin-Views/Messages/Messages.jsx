import React from "react";
import "./Messages.css";
import useFetchMessages from "../../../../hooks/useFetchMessages";
import NameInitials from "../../../../Components/Common/NameInitials/NameInitials";
import moment from "moment";

function Messages() {
  const { isLoading, messages } = useFetchMessages();
  console.log(messages);
  return (
    <div className="message">
      <div className="message__wrapper">
        {messages?.map((msg) => {
          return (
            <div key={msg?._id}>
              <div className="name__initials__wrapper">
                <NameInitials name={msg?.senderName} />
                <div>
                  <p>{msg?.senderName}</p>
                  <p>{moment(msg?.createdAt).format("MMMM D, YYYY")}</p>
                </div>
              </div>
              <div className="message__content">
                <p>
                  Email:{" "}
                  <strong>
                    <a href={`mailto:${msg?.senderMessage}`}>
                      {msg?.senderMessage}
                    </a>
                  </strong>
                </p>
                <p>{msg?.senderMessage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Messages;
