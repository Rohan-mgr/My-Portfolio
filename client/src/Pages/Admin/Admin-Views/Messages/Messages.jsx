import React from "react";
import useFetchMessages from "../../../../hooks/useFetchMessages";

function Messages() {
  const { isLoading, messages } = useFetchMessages();
  console.log(messages);
  return (
    <div className="message">
      <ul>
        {messages?.map((msg) => {
          return (
            <li key={msg?._id}>
              <p>{msg?.senderMessage}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Messages;
