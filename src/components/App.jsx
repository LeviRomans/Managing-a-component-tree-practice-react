/*-------------------- Import Below --------------------*/
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

/*-------------------- App Component --------------------*/
function App() {
  /*-------------------- InputArea State --------------------*/
  const [inputText, setInputText] = useState("");

  /*-------------------- ToDoItem State --------------------*/
  const [items, setItems] = useState([]);

  /*-------------------- ToDoItem Functions --------------------*/
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  /*-------------------- InputArea Functions --------------------*/
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  /*-------------------- App Render / Return --------------------*/
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        handleChange={handleChange}
        addItem={addItem}
        inputText={inputText}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
