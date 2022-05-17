import type { NextPage } from 'next';
import { useState } from 'react';

export interface gamesState {
  count: number | undefined;
}

const Count: NextPage = () => {
  const [count, setCount] = useState(0);
  const calculateNum = (num: number, calcuration: string) => {
    calcuration === 'plus' && setCount(count + num);
    calcuration === 'minus' && setCount(count - num);
    calcuration === 'multiplication' && setCount(count * num);
    calcuration === 'division' && setCount(count / num);
  };

  return (
    <section className='game-section count-game'>
      <h2 className='game-title'>
        <i>☺️</i>
        count더하기, 빼기
      </h2>
      <p className='game-value'>{count}</p>
      <div className='button-wrap'>
        <div
          className='button'
          onClick={() => {
            calculateNum(1, 'plus');
          }}
        >
          <label id='plus'>+</label>
          <input name='plus'></input>
        </div>

        <div
          className='button'
          onClick={() => {
            calculateNum(1, 'minus');
          }}
        >
          <label id='minus'>-</label>
          <input name='minus'></input>
        </div>

        <div
          className='button'
          onClick={() => {
            calculateNum(2, 'multiplication');
          }}
        >
          <label id='multiplication'>x2</label>
          <input name='multiplication'></input>
        </div>

        <div
          className='button'
          onClick={() => {
            calculateNum(2, 'division');
          }}
        >
          <label id='division'>/2</label>
          <input name='division'></input>
        </div>
        <div
          className='button'
          onClick={() => {
            setCount(0);
          }}
        >
          <label id='reset'>RESET</label>
          <input name='reset'></input>
        </div>
      </div>
    </section>
  );
};

export default Count;
