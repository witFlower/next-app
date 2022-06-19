import type { NextPage } from 'next';
import { useState } from 'react';

interface Props {
  todos: [];
}
export type TodoType = {
  index: number;
  todo: string;
  checked: boolean;
}[];

const TodoItem: NextPage<Props> = (todos: any) => {
  return (
    <li key={todos.index}>
      <input
        id={`todo${todos.index}`}
        checked={todos.checked}
        type='checkbox'
      />
      <label htmlFor={`todo${todos.index}`}></label>
      {todos.todo}
    </li>
  );
};

export default TodoItem;
