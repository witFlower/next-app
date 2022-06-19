import type { NextPage } from 'next';
import { useState } from 'react';
import TodoItem from './TodoItem';

export type TodoType = {
  index: number;
  todo: string;
  checked: boolean;
};

const TodoList: NextPage = () => {
  const [todos, setTodos] = useState([]);
  // const handleChange = (event: any) => {
  //   const value = event.target.value;
  //   setComment(value);
  // };

  // const addTodos = (event: any) => {
  //   const value = event.target.value;
  //   let index = 0;
  //   todos?.concat();
  //   for (let index = 0; index < value.length; index++) {}
  //   console.log(todos);
  //   // 투두 추가하는 부분부터 진행하면 됨
  // };

  return (
    <section>
      {todos.map((todo: any, index: number) => (
        <TodoItem key={index} todos={todo} />
      ))}
    </section>
  );
};

export default TodoList;
