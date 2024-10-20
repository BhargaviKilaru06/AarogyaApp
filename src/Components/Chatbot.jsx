import React, { useState } from 'react';
import "./Chatbot.css"
const Chatbot = () => {
    const [messages, setMessages] = useState([{ text: "Hi! How can I assist you today?", sender: "bot" }]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            const userMessage = { text: input, sender: "user" };
            setMessages([...messages, userMessage]);
            setInput('');

            // Simulate bot response
            setTimeout(() => {
                const botMessage = { text: "Sorry, I can't respond to that yet.", sender: "bot" };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            }, 1000);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
