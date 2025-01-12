import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { prevPrompts, onSent, setRecentPrompt } = useContext(Context);

  const handleActivityClick = async (prompt) => {
    await onSent(prompt);
  }
  return (
    <div className="sidebar ">
      <div className="sidebar-top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {isOpen ? <p>New Chat</p> : null}
        </div>

        <div className="recent-tab">
          {isOpen ? <p className="recent-title">Recent</p> : null}

       <div className="recent">
       {prevPrompts.length > 0 ? (
            prevPrompts.map((prompt, index) => (
              <div className="recent-entry entries" key={index} onClick={() => handleActivityClick(prompt)}>
                <img src={assets.message_icon} alt="" />
                {isOpen ? <p>{prompt.slice(0, 14) + "..."}</p> : null}{" "}
              </div>
            ))
          ) : (
            <div className="recent-entry no-activity">
              <img src={assets.history_icon} alt="" />
              {isOpen ? <p>No recent activity</p> : null}{" "}
            </div>
          )}
        </div>
       </div>
      </div>
      <div className="sidebar-bottom">
        <div className="recent-entry bottom-item">
          <img src={assets.question_icon} alt="" />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className="recent-entry bottom-item">
          <img src={assets.history_icon} alt="" />
          {isOpen ? <p>Activity</p> : null}{" "}
        </div>
        <div className="recent-entry bottom-item">
          <img src={assets.setting_icon} alt="" />
          {isOpen ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
