
import { useState } from "react";
import {
  FiSearch,
  FiSend,
  FiMoreVertical,
  FiPaperclip,
  FiArrowLeft,
} from "react-icons/fi";

import "../../styles/messages.css";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "EW",
      item: "Nike Denim Jacket",
      lastMessage: "Yes, I am interested in the swap.",
      time: "10:42 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Sophia Brown",
      avatar: "SB",
      item: "Zara Summer Dress",
      lastMessage: "Can you share more pictures?",
      time: "09:25 AM",
      unread: 0,
    },
    {
      id: 3,
      name: "Olivia Martin",
      avatar: "OM",
      item: "Levi's Jeans",
      lastMessage: "That sounds good to me.",
      time: "Yesterday",
      unread: 0,
    },
  ];

  const [chatMessages, setChatMessages] = useState({
    1: [
      {
        id: 1,
        sender: "them",
        text: "Hi! I saw your clothing listing.",
        time: "10:35 AM",
      },
      {
        id: 2,
        sender: "me",
        text: "Hello! Which item are you interested in?",
        time: "10:37 AM",
      },
      {
        id: 3,
        sender: "them",
        text: "I really like the jacket. Would you like to swap it with my hoodie?",
        time: "10:40 AM",
      },
      {
        id: 4,
        sender: "them",
        text: "Yes, I am interested in the swap.",
        time: "10:42 AM",
      },
    ],
    2: [
      {
        id: 1,
        sender: "them",
        text: "Hi, is the dress still available?",
        time: "09:20 AM",
      },
      {
        id: 2,
        sender: "me",
        text: "Yes, it is available.",
        time: "09:22 AM",
      },
      {
        id: 3,
        sender: "them",
        text: "Can you share more pictures?",
        time: "09:25 AM",
      },
    ],
    3: [
      {
        id: 1,
        sender: "them",
        text: "Would you be interested in swapping the jeans?",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: "me",
        text: "Yes, I would be interested.",
        time: "Yesterday",
      },
      {
        id: 3,
        sender: "them",
        text: "That sounds good to me.",
        time: "Yesterday",
      },
    ],
  });

  const handleSendMessage = () => {
    if (!message.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatMessages((prev) => ({
      ...prev,
      [selectedChat.id]: [
        ...(prev[selectedChat.id] || []),
        newMessage,
      ],
    }));

    setMessage("");
  };

  const currentMessages = selectedChat
    ? chatMessages[selectedChat.id] || []
    : [];

  return (
    <div className="messages-page">
      <div className="messages-container">
        {/* Header */}
        <div className="messages-page-header">
          <div>
            <h1>Messages</h1>
            <p>Chat with people about clothing swaps.</p>
          </div>

          <div className="online-status">
            <span></span>
            Online
          </div>
        </div>

        {/* Chat Layout */}
        <div className="messages-layout">
          {/* Conversation List */}
          <aside
            className={`conversation-panel ${
              selectedChat ? "mobile-hidden" : ""
            }`}
          >
            <div className="conversation-header">
              <h2>Conversations</h2>

              <span className="conversation-count">
                {conversations.length}
              </span>
            </div>

            {/* Search */}
            <div className="message-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search conversations..."
              />
            </div>

            {/* Conversation Items */}
            <div className="conversation-list">
              {conversations.map((conversation) => (
                <button
                  type="button"
                  className={`conversation-item ${
                    selectedChat?.id === conversation.id
                      ? "active"
                      : ""
                  }`}
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation)}
                >
                  <div className="conversation-avatar">
                    {conversation.avatar}
                  </div>

                  <div className="conversation-content">
                    <div className="conversation-top">
                      <strong>{conversation.name}</strong>
                      <span>{conversation.time}</span>
                    </div>

                    <div className="conversation-item-name">
                      {conversation.item}
                    </div>

                    <div className="conversation-bottom">
                      <p>{conversation.lastMessage}</p>

                      {conversation.unread > 0 && (
                        <span className="unread-count">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Chat Window */}
          <section
            className={`chat-panel ${
              !selectedChat ? "empty-chat" : ""
            }`}
          >
            {!selectedChat ? (
              <div className="chat-empty-state">
                <div className="empty-chat-icon">
                  <FiSend />
                </div>

                <h2>Select a conversation</h2>

                <p>
                  Choose a conversation from the left to start
                  messaging.
                </p>
              </div>
            ) : (
              <>
                {/* Chat Header */}
                <div className="chat-header">
                  <button
                    type="button"
                    className="mobile-back-button"
                    onClick={() => setSelectedChat(null)}
                  >
                    <FiArrowLeft />
                  </button>

                  <div className="chat-user-avatar">
                    {selectedChat.avatar}
                  </div>

                  <div className="chat-user-info">
                    <h3>{selectedChat.name}</h3>
                    <p>
                      <span></span>
                      Active now
                    </p>
                  </div>

                  <button
                    type="button"
                    className="chat-more-button"
                  >
                    <FiMoreVertical />
                  </button>
                </div>

                {/* Item Info */}
                <div className="swap-item-info">
                  <div>
                    <small>Discussing item</small>
                    <strong>{selectedChat.item}</strong>
                  </div>

                  <button type="button">View Item</button>
                </div>

                {/* Messages */}
                <div className="chat-messages">
                  <div className="chat-date">Today</div>

                  {currentMessages.map((msg) => (
                    <div
                      className={`message-row ${
                        msg.sender === "me"
                          ? "message-sent"
                          : "message-received"
                      }`}
                      key={msg.id}
                    >
                      {msg.sender === "them" && (
                        <div className="message-avatar">
                          {selectedChat.avatar}
                        </div>
                      )}

                      <div className="message-content">
                        <div className="message-bubble">
                          {msg.text}
                        </div>

                        <span className="message-time">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="message-input-area">
                  <button
                    type="button"
                    className="attachment-button"
                  >
                    <FiPaperclip />
                  </button>

                  <input
                    type="text"
                    value={message}
                    placeholder="Write a message..."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                  />

                  <button
                    type="button"
                    className="send-button"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                  >
                    <FiSend />
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Messages;