
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  Sparkles,
  User,
  Minimize2,
  X,
} from "lucide-react";

const suggestions = [
  "Tell me about Arish",
  "What projects has he built?",
  "What are his technical skills?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! I'm Arish's AI assistant. Ask me about his projects, skills, education, or development journey!",
    },
  ]);

  const sendMessage = async (message = input) => {
    const text = message.trim();

    if (!text || loading) return;

    const previousMessages = messages;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
  "https://arish-portfolio-chatbot.onrender.com/api/chat",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: previousMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Chat service unavailable."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error.message ||
            "Unable to connect right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* Chatbot Header */}
            <div className="chatbot-header">
              <div className="chatbot-profile">
                <div className="chatbot-avatar">
                  <Bot size={24} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>Arish's AI Assistant</h3>
                  <span>
                    <i />
                    Portfolio Assistant
                  </span>
                </div>
              </div>

              <button
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
              >
                <Minimize2 size={19} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              <div className="chatbot-welcome">
                <Sparkles size={17} />
                <span>Ask me anything about Arish!</span>
              </div>

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    message.role === "user"
                      ? "user-message"
                      : "bot-message"
                  }`}
                >
                  <div className="chat-message-avatar">
                    {message.role === "user" ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>

                  <div className="chat-message-content">
                    {message.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="chat-message bot-message">
                  <div className="chat-message-avatar">
                    <Bot size={16} />
                  </div>

                  <div className="chat-typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="chat-suggestions">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                      disabled={loading}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              className="chatbot-input-area"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                disabled={loading}
                maxLength={2000}
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>

            <div className="chatbot-footer">
              Powered by OpenRouter · Arish Islam Portfolio
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Robot Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
      >
        {isOpen ? (
          <X size={27} />
        ) : (
          <Bot size={29} strokeWidth={1.8} />
        )}

        {!isOpen && <span className="chatbot-status-dot" />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
