import { useState } from "react";
import { FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";

function ChatBox() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! I'm SafeSphere AI. How can I help you stay safe today?",
    },
  ]);

  const getAIResponse = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("help")) {
      return "I'm here to help. Tell me what's happening.";
    }

    if (msg.includes("emergency")) {
      return "🚨 If you're in immediate danger, press the SOS button immediately.";
    }

    if (msg.includes("follow")) {
      return "⚠️ If someone is following you, move to a crowded place, contact someone you trust, and use the SOS feature if necessary.";
    }

    if (msg.includes("harassment")) {
      return "Please stay in a safe public area if possible. You can also report the incident using the Report Incident page.";
    }

    if (msg.includes("police")) {
      return "Use the Nearby Help page to locate the nearest police station.";
    }

    if (msg.includes("hospital")) {
      return "Nearby Help can guide you to the closest hospital.";
    }

    return "I understand. Could you tell me a little more so I can provide better safety guidance?";
  };

  const sendMessage = () => {
    if (message.trim() === "") return;

    const updatedMessages = [
      ...messages,
      { sender: "You", text: message },
      { sender: "AI", text: getAIResponse(message) },
    ];

    setMessages(updatedMessages);
    setMessage("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

      {/* Header */}
      <div className="bg-purple-700 text-white p-5 flex items-center gap-3">
        <FaRobot size={28} />
        <h2 className="text-2xl font-bold">SafeSphere AI Assistant</h2>
      </div>

      {/* Messages */}
      <div className="h-[500px] overflow-y-auto bg-gray-100 p-5">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-5 flex ${
              msg.sender === "You"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-sm rounded-xl p-4 ${
                msg.sender === "You"
                  ? "bg-purple-700 text-white"
                  : "bg-white border"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">

                {msg.sender === "AI" ? (
                  <FaRobot className="text-green-600" />
                ) : (
                  <FaUser />
                )}

                <strong>{msg.sender}</strong>

              </div>

              <p>{msg.text}</p>

            </div>
          </div>
        ))}

      </div>

      {/* Input */}
      <div className="border-t p-4 flex gap-3">

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="flex-1 border rounded-lg px-4 py-3"
        />

        <button
          onClick={sendMessage}
          className="bg-purple-700 text-white px-6 rounded-lg hover:bg-purple-800 flex items-center gap-2"
        >
          <FaPaperPlane />
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;
