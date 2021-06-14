import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, editItem, deleteItem }) => {
  console.log(list);

  const renderList = () => {
    return list.map((item, index) => {
      return (
        <article className="grocery-item" key={index}>
          <p className="title">{item}</p>
          <div className="btn-container">
            <button type="button" className="edit-btn">
              <FaEdit id={index} onClick={() => editItem(index)} />
            </button>
            <button type="button" className="delete-btn">
              <FaTrash id={index} onClick={() => deleteItem(index)} />
            </button>
          </div>
        </article>
      );
    });
  };

  return <>{list.length > 0 && renderList()}</>;
};

export default List;
