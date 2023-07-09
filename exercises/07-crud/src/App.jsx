import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [itemName, setItemName] = useState(""); // estado apple, grape
  const [itemCost, setItemCost] = useState(""); // 0.5 1 8
  const [items, setItems] = useState([]); //[[apple, 5], [grapes, 4]]

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la pagina

    const newItem = {
      // objeto
      name: itemName,
      cost: Number(itemCost), // string a numero "0.8" -> 0.8
    };

    setItems([...items, newItem]); // añade el producto al array

    //Reset the values of the form
    setItemName("");
    setItemCost("");
  };

  const deleteItem = (id) => {
    const newItems = [...items];

    newItems.splice(id, 1); //id, splice empieza == 1, numero de posiciones que elimina
    setItems(newItems);
  };

  const deleteAllItems = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              id="item"
              name="item"
              className="form-control"
              type="text"
              value={itemName}
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              id="price"
              name="price"
              className="form-control"
              type="number"
              min="0"
              step=".01"
              value={itemCost}
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              onChange={(e) => setItemCost(e.target.value)}
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              /**
               * Complete me. (You can use something else instead of a table if you like)
               * @example
               * <tr>
               *   <td>Toilet Paper</td>
               *   <td>$1.99</td>
               *   <td>
               *     <button aria-label="Delete" title="Delete" ... >
               *       &times;
               *     </button>
               *   </td>
               * </tr>
               */
              items.map((item, idx) => {
                return (
                  <tr key={`item-${idx}`}>
                    <td>{item.name}</td>
                    <td>{item.cost}</td>
                    <td>
                      <button
                        aria-label="Delete"
                        title="Delete"
                        className="btn btn-danger"
                        onClick={() => deleteItem(idx)}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <p className="lead">
          <strong>
            Total Cost: {items.reduce((acc, item) => acc + item.cost, 0)}
          </strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={deleteAllItems}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
