import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("");
  const [array, setArray] = useState([]);

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...array];
    newMessage.push(message);
    setArray(newMessage);
  };
  const deleteData = (index) => {
    const data = [...array];
    data.splice(index, 1);
    setArray(data);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={addMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Enter message here"
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div class="board">
        {array.map((item, index) => {
          return (
            <div className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteData(index);
                }}
              >
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
