import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
  {
    _id: "gdyg74",
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    _id: "jdn73y",
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    _id: "928ydg",
    title: "Send the finished assignment",
    isCompleted: false,
  },
  {
    _id: "8shsp9",
    title: "Spend 30 minutes exercising",
    isCompleted: false,
  },
  {
    _id: "8pou90",
    title: "Attend a Spanish lesson",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
