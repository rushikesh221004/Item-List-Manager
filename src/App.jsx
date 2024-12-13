import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]); 
      setInput(""); 
    }
  };
  

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[50%] flex flex-col p-5 mt-7 h-fit">
          <h3 className="text-2xl text-gray-600 font-semibold mb-4">
            Item List
          </h3>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item"
            data-testid="input-field"
            className="bg-gray-200 p-2"
          />
          <button
            className="bg-green-500 rounded mt-5 text-white text-lg font-semibold py-2 px-4"
            onClick={handleAddItem}
            data-testid="add-button"
          >
            Add Item
          </button>
          <ul data-testid="item-list">
            {items.map((item, index) => (
              <li key={index} data-testid="list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
