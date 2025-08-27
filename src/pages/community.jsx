import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/store-style.css";
import peopledata from "../data/members.json";

const Community = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [onlineMembers, setOnlineMembers] = useState([]);
  const [offlineMembers, setOfflineMembers] = useState([]);
  const [user] = useState({
    username: "Kayda",
    avatar: "assets/user2.jpg",
    isLoggedIn: true,
  });

  // 🟢 تحميل الأعضاء من JSON (بدل fetch)
  useEffect(() => {
    const online = peopledata.filter((m) => m.status === "online");
    const offline = peopledata.filter((m) => m.status === "offline");
    setOnlineMembers(online);
    setOfflineMembers(offline);
  }, []);

  // 🟢 إرسال رسالة
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.isLoggedIn || input.trim() === "") return;

    const newMessage = {
      user,
      content: input,
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <Layout>
      <div className="community-layout">
        {/* Servers Bar */}
        <aside className="servers-bar">
          <div className="server-icon active server-icon-main">
            <img src="assets/logo (3).png" alt="Main Server" />
          </div>
          <div className="server-icon">
            <img
              src="assets/games/genshin-impact.jpg"
              alt="genshin server"
            />
          </div>
          <div className="server-icon">
            <i className="fa fa-plus"></i>
          </div>
        </aside>

        {/* Channels */}
        <aside className="channels-bar">
          <div className="channels-header">
            <h4>Level Up Community</h4>
            <i className="fas fa-chevron-down"></i>
          </div>
          <ul className="channel-list">
            <li className="active">
              <i className="fas fa-hashtag"></i> general
            </li>
            <li>
              <i className="fas fa-hashtag"></i> announcements
            </li>
            <li>
              <i className="fas fa-hashtag"></i> gaming
            </li>
            <li className="category">
              <i className="fas fa-lock"></i> Voice Channels
            </li>
            <li>
              <i className="fas fa-headphones"></i> General Voice
            </li>
          </ul>

          {/* User Panel */}
          <div className="user-panel">
            <div className="user-info">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="user-avatar"
              />
              <div className="user-details">
                <span className="username">{user.username}</span>
                <span className="user-status">#1234</span>
              </div>
            </div>
            <div className="user-controls">
              <button className="icon-btn">
                <i className="fas fa-microphone"></i>
              </button>
              <button className="icon-btn">
                <i className="fas fa-cog"></i>
              </button>
            </div>
          </div>
        </aside>

        {/* Chat Area */}
        <main className="chat-area">
          <div className="chat-header">
            <div className="chat-header-container">
              <div className="channel-info">
                <i className="fas fa-hashtag"></i>
                <h3>general</h3>
                <div className="channel-separator"></div>
                <div className="channel-description">
                  <i className="fas fa-comment-alt"></i>
                  Channel description goes here
                </div>
              </div>
              <div className="chat-tools">
                <button className="icon-btn" id="members-btn">
                  <i className="fas fa-user-friends"></i>
                </button>
                <button className="icon-btn">
                  <i className="fas fa-bell"></i>
                </button>
                <button className="icon-btn">
                  <i className="fas fa-pin"></i>
                </button>
                <div className="search-box">
                  <input type="text" placeholder="Search" />
                  <i className="fas fa-search"></i>
                </div>
                <button className="icon-btn">
                  <i className="fas fa-inbox"></i>
                </button>
                <button className="icon-btn">
                  <i className="fas fa-question-circle"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="message-thread">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <img src={msg.user.avatar} alt={msg.user.username} />
                <div className="message-content">
                  <div className="message-header">
                    <strong>{msg.user.username}</strong>
                    <span className="timestamp">{msg.timestamp}</span>
                  </div>
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="message-input">
            <div className="input-tools">
              <button className="icon-btn">
                <i className="fas fa-plus-circle"></i>
              </button>
              <button className="icon-btn">
                <i className="fas fa-gift"></i>
              </button>
              <button className="icon-btn">
                <i className="fas fa-grin"></i>
              </button>
            </div>
            <div className="message-input-form">
              <form className="message-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Message #general"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="send-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Members List */}
          <aside className="members-bar active">
            <div className="members-header">
              <h4>
                ONLINE — <span>{onlineMembers.length}</span>
              </h4>
              <button className="icon-btn">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <ul className="member-list">
              {onlineMembers.map((member, i) => (
                <li key={i} className="member online">
                  <div className="member-info">
                    <div className="avatar-container">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="member-avatar"
                      />
                      <span className="online-status"></span>
                    </div>
                    <div className="member-details">
                      <span className="username">{member.name}</span>
                      {member.role && (
                        <span className="user-role">{member.role}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="members-header members-divider">
              <h4>
                OFFLINE — <span>{offlineMembers.length}</span>
              </h4>
              <button className="icon-btn">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <ul className="member-list">
              {offlineMembers.map((member, i) => (
                <li key={i} className="member offline">
                  <div className="member-info">
                    <div className="avatar-container">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="member-avatar"
                      />
                      <span className="offline-status"></span>
                    </div>
                    <div className="member-details">
                      <span className="username">{member.name}</span>
                      {member.role && (
                        <span className="user-role">{member.role}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="members-footer">
              <button className="add-friend-btn">
                <i className="fas fa-user-plus"></i>
                Add Friend
              </button>
            </div>
          </aside>
        </main>
      </div>
    </Layout>
  );
};

export default Community;
