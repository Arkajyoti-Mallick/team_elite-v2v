import { useState } from "react";
import { FaRobot, FaPaperPlane, FaUser } from "react-icons/fa";
import ChatBox from "../components/ChatBox";


function AIAssistant() {
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "AI",
      text: "👋 Hello! I'm SafeSphere AI. How can I help you stay safe today?",
    },
  ]);

  const getResponse = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("follow")) {
      return "⚠️ If you think someone is following you, move to a crowded, well-lit area, call a trusted contact, and press the SOS button if you feel unsafe.";
    }

    if (text.includes("harassment")) {
      return "🚨 If you're experiencing harassment, stay in a public place, document details if it is safe to do so, and consider reporting the incident through the Report Incident page.";
    }

    if (text.includes("emergency")) {
      return "🆘 In an emergency, press the SOS button immediately. SafeSphere can help record your location and notify your emergency contacts in later phases.";
    }

    if (text.includes("police")) {
      return "👮 Use the Nearby Help page to find the nearest police station or emergency service.";
    }

    return "🤖 I understand. For immediate danger, use the SOS feature. Otherwise, tell me more so I can provide safety guidance.";
  };

  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: message,
    };

    const aiMessage = {
      sender: "AI",
      text: getResponse(message),
    };

    setChat([...chat, userMessage, aiMessage]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-green-600 text-white py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          🤖 AI Safety Assistant
        </h1>
      </div> 
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <div className="max-w-5xl mx-auto">
          <ChatBox />
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Chat Window */}
          <div className="h-[500px] overflow-y-auto p-6 bg-gray-50">

            {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-5 ${
                  msg.sender === "You"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-sm rounded-xl p-4 ${
                    msg.sender === "You"
                      ? "bg-purple-600 text-white"
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
              placeholder="Ask about your safety..."
              className="flex-1 border rounded-lg px-4 py-3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-6 rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              <FaPaperPlane />
              Send
            </button>

          </div>

        </div>

        {/* Suggested Questions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            Try asking:
          </h2>

          <ul className="space-y-3 text-gray-700">

            <li>• Someone is following me.</li>

            <li>• What should I do during an emergency?</li>

            <li>• How can I report harassment?</li>

            <li>• Where is the nearest police station?</li>

            <li>• I don't feel safe walking alone.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;