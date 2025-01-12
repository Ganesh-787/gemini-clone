import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const Main = () => {
  const {
    input,
    setInput,
    onSent,
    showResult,
    recentPrompt,
    resultData,
    loading,
  } = useContext(Context);

  return (
    <div className="main">
      <nav>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </nav>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
              <div className="cards">
                <div className="card">
                  <p>
                    Dive into new ideas, untapped skills, and unexplored
                    territories. Where will your curiosity take you today?
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    Brainstorm innovative solutions and let your imagination
                    lead the way.
                  </p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Share perspectives and build bridges with your words.</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    Create, code, and bring your visions to life. Transform
                    ideas into powerful digital experiences.
                  </p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>

              <div className="result-content">
                <img src={assets.gemini_icon} alt="gemini" />
                {loading ? (
                  <div className="loading">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              name=""
              id=""
              placeholder="Enter a prompt here"
            />
            <div className="icons">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={onSent} />
            </div>
          </div>
          <div className="bottom-text">
            <p>
              Gemini may display inaccurate info, including about people, so
              double check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
