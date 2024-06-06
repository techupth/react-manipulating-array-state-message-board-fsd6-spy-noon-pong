import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleMessageTextChange = (event) => {
    setMessage(event.target.value);
  }

  const addMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage('');
    }
  }

  const deleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message Board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={message}
            onChange={handleMessageTextChange}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      <div className="board">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            <h1>{msg}</h1>
            <button className="delete-button" onClick={() => deleteMessage(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;


