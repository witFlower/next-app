import type { NextPage } from 'next';
import { useState } from 'react';
import Title from './Title';

export interface gamesState {
  count: string | undefined;
}

const TodoBlock: NextPage = () => {
  type TodoType = {
    index: number;
    todo: string;
    checked: boolean;
  };

  const TODOS = [
    { index: 1, todo: '장보기', checked: false },
    { index: 2, todo: '코딩 공부하기', checked: false },
    { index: 3, todo: '방 정리하기', checked: true },
  ];

  const todoList = (todos: any) => {
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

  return (
    <section className='game-section coment-game'>
      <Title title='TODOS' />
      {/* <p className='game-value'>[ {comment} ]</p> */}
      <div className='button-wrap'>
        <div className='textbox'>
          <label id='emptyInput'></label>
          <input type='text' name='emptyInput'></input>
        </div>
        <div
          className='button'
          // onClick={() => {
          //   addTodos;
          // }}
        >
          <label id='plus'>+</label>
          <input name='plus'></input>
        </div>
        {/* <div
          className='button'
          onClick={() => {
            setComment('');
          }}
        >
          <label id='reset'>CLEAR</label>
          <input name='reset'></input>
        </div> */}
      </div>
      <div>
        <>
          <h3>array.map</h3>
          <p>DOM을 반환</p>
          <ul>
            {TODOS.map((todos: TodoType) => (
              <>
                <p key={todos.index}>
                  <input
                    id={`tod${todos.index}`}
                    checked={todos.checked}
                    type='checkbox'
                  />
                  <label htmlFor={`tod${todos.index}`}></label>
                  {todos.todo}
                </p>
              </>
            ))}
          </ul>
          <br />
          <p>값을 반환</p>
          <ul>{TODOS.map((todos: TodoType) => todoList(todos))}</ul>
        </>
      </div>
    </section>
  );
};

export default TodoBlock;
