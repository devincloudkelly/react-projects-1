import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      let newList = [...list];
      newList.splice(editId, 1, name);
      setList(newList);
      setName("");
      setEditId(null);
      setIsEditing(false);
      setAlert({ show: true, msg: "updated list", type: "success" });
      return;
    } else {
      setList([...list, name]);
      setName("");
      setAlert({ show: true, msg: "added item to list", type: "success" });
      return;
    }
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    setName(list[id]);
  };

  const deleteItem = (id) => {
    const newList = [...list];
    newList.splice(id, 1);
    setList(newList);
    setAlert({ show: true, msg: "deleted item from list", type: "danger" });
  };

  useEffect(() => {
    const alertTime = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 2500);
    return () => clearTimeout(alertTime);
  }, [alert.show]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="ex. eggs"
            className="grocery"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List list={list} editItem={editItem} deleteItem={deleteItem} />
        <button
          className="clear-btn"
          onClick={() => {
            setList([]);
            setAlert({ show: true, msg: "cleared list", type: "danger" });
          }}
        >
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
