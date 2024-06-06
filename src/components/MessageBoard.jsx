import { useState } from "react";

function MessageBoard() {
  const [input, setinput] = useState(" ");
  const [messagelist, setmessagelist] = useState([]);

  const handlesubmit = () => {
    event.preventDefault();
    const newMessages = [...messagelist];
    newMessages.push(input);
    setmessagelist(newMessages);
    setinput("");
  };

  const deleteMessage = (messageIndex) => {
    const newMessages = [...messagelist];
    newMessages.splice(messageIndex, 1);
    setmessagelist(newMessages);
  };
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handlesubmit}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={input}
            onChange={(event) => {
              setinput(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div class="board">
        {messagelist.map((item, index) => {
          return (
            <div className="message">
              <h1>{item}</h1>
              <button className="delete-button" onClick={deleteMessage}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
