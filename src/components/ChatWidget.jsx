import React, { useState, useRef, useEffect } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 I'm SoftSell's AI assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Common questions and predefined answers
  const knowledgeBase = [
    {
      keywords: ["how", "sell", "license", "licenses", "process", "work"],
      answer:
        "Selling your licenses with SoftSell is easy! Just follow these steps:\n1. Upload your license details through our secure portal\n2. Receive an instant valuation based on market rates\n3. Accept the offer and get paid within 48 hours",
    },
    {
      keywords: [
        "pricing",
        "price",
        "value",
        "worth",
        "cost",
        "fee",
        "commission",
        "percentage",
      ],
      answer:
        "Our pricing is transparent. We take a small 8% commission on each successful sale. The valuation we provide is based on current market rates, demand, and license type. We guarantee competitive pricing and typically achieve 20-30% higher values than other resellers.",
    },
    {
      keywords: [
        "secure",
        "security",
        "safe",
        "protected",
        "data",
        "information",
      ],
      answer:
        "Your security is our priority. We use end-to-end encryption for all license data and financial information. Our platform is regularly audited by third-party security experts and complies with industry standards for data protection.",
    },
    {
      keywords: [
        "payment",
        "pay",
        "paid",
        "transfer",
        "receive",
        "money",
        "method",
      ],
      answer:
        "We offer multiple payment methods including bank transfer, PayPal, and direct deposit. Once you accept an offer, payment is processed within 48 hours. For large transactions, we can arrange custom payment schedules.",
    },
    {
      keywords: ["support", "help", "contact", "assistance", "expert", "team"],
      answer:
        "Our expert support team is available Monday-Friday, 9am-6pm EST. You can reach us via email at support@softsell.com or through the contact form on our website. For premium clients, we offer dedicated account managers.",
    },
  ];

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage) => {
    setIsTyping(true);

    // Check if the message matches any keywords in the knowledge base
    const userInput = userMessage.toLowerCase();

    // Find the best matching response based on keyword matches
    let bestMatch = null;
    let maxMatches = 0;

    knowledgeBase.forEach((item) => {
      const matches = item.keywords.filter((keyword) =>
        userInput.includes(keyword.toLowerCase())
      ).length;

      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = item.answer;
      }
    });

    // Default response if no matches found
    const response =
      maxMatches > 0
        ? bestMatch
        : "I'm not sure I understand. Could you try rephrasing? You can ask me about how to sell licenses, our pricing, security, payment methods, or how to get support.";

    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 2,
          text: response,
          isBot: true,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: input,
        isBot: false,
      },
    ]);

    // Process response
    simulateResponse(input);

    // Clear input
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat widget */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-4">
            <h3 className="font-semibold">SoftSell Assistant</h3>
            <p className="text-sm text-blue-100">
              Ask me anything about our services
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-3/4 p-3 rounded-lg ${
                    message.isBot
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          <div className="p-2 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700 overflow-x-auto whitespace-nowrap">
            <div className="flex space-x-2">
              {[
                "How do I sell licenses?",
                "Is it secure?",
                "Payment methods",
                "Support options",
              ].map((q, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMessages((prev) => [
                      ...prev,
                      {
                        id: prev.length + 1,
                        text: q,
                        isBot: false,
                      },
                    ]);
                    simulateResponse(q);
                  }}
                  className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-2 border-t border-gray-200 dark:border-gray-700 flex"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
