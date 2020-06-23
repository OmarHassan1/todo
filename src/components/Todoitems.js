import React from "react";

export const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span onClick={() => deleteItem(item.id)}>&times;</span>
        </div>
      );
    })
  ) : (
    <p>There is no item to Show</p>
  );

  return (
    <div className="TodoList">
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      {ListItems}
    </div>
  );
};
