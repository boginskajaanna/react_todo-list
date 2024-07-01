import React from "react";
import CheckBox from "./CheckBox";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-3 bg-gray-800 rounded-2xl p-4 w-full">
      <button className="flex items-center" onClick={() => changeTodo(todo._id)}>
        <CheckBox isCompleted={todo.isCompleted} />
        <span className={`${todo.isCompleted ? "line-through" : ""} ml-2`}>{todo.title}</span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <FaRegTrashCan
          size={22}
          className="text-gray-600 hover:text-pink-500 transition-colors ease duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
