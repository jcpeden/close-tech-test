import { useState, Fragment } from 'react';
import './App.css';

const itemsReducer = (colors, fruits, sizes) => {
  return sizes.reduce(
    (items, size) => [
      ...items,
      ...fruits.reduce(
        (acc, fruit) => [
          ...acc,
          ...colors.reduce(
            (acc, color) => [
              ...acc,
              {
                name: `${size} ${color} ${fruit}`,
                color,
              },
            ],
            [],
          ),
        ],
        [],
      ),
    ],
    [],
  );
}



const App = () => {
  const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
  const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];
  const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
  const items = itemsReducer(colors, fruits, sizes)
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (itemName) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemName)) {
        // Remove item from selected items array
        return prevSelectedItems.filter(item => item !== itemName);
      } else {
        // Add item to selected items array
        return [...prevSelectedItems, itemName];
      }
    });
  };

  return (
    <Fragment>
      <div className="selectedItems">
        <h2>Selected Items:</h2>
        <ul data-testid="selected">
          {selectedItems.map((itemName, index) => (
            <li key={index}>{itemName}</li>
          ))}
        </ul>
      </div>
      <ul className="List">
        {items.map(item => (
          <li
            key={item.name}
            data-testid="item"
            className={`List__item List__item--${item.color} ${selectedItems.includes(item.name) ? 'List__item--selected' : ''}`}
            onClick={() => handleClick(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;

