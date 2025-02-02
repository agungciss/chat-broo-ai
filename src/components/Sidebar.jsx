import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaMessage, FaPlus, FaQuestion } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "4px solid #000000",
        boxShadow: "8px 8px 0 #000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div>
        <IoMenu
          onClick={() => setExtended(!extended)}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            marginBottom: "15px",
            color: "#000000",
          }}
        />
        <div
          onClick={() => newChat()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 15px",
            backgroundColor: "#FFD700",
            border: "2px solid #000000",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          <FaPlus style={{ fontSize: "20px" }} />
          {extended && <p style={{ margin: 0 }}>New Chat</p>}
        </div>

        {extended && (
          <div
            style={{
              marginTop: "20px",
              animation: "fadeIn 1s",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <p style={{ margin: "10px 0", fontWeight: "bold" }}>Recent</p>
            {prevPrompt?.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  backgroundColor: "#90EE90",
                  border: "2px solid #000000",
                  borderRadius: "30px",
                  cursor: "pointer",
                }}
              >
                <FaMessage style={{ fontSize: "20px" }} />
                <p style={{ margin: 0 }}>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {[
          { icon: <FaQuestion />, label: "Help" },
          { icon: <MdHistory />, label: "Activity" },
          { icon: <IoSettings />, label: "Settings" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              backgroundColor: "#ADD8E6",
              border: "2px solid #000000",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            {item.icon}
            {extended && <p style={{ margin: 0 }}>{item.label}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
