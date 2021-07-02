import React from 'react';
import Square_box from './Square_box';

const Board = () => {
  return (
    <div className="board">
      <div className="board_row">
        <Square_box val={1} />
        <Square_box val={2} />
        <Square_box val={3} /> 
      </div>
      <div className="board_row">
        <Square_box val={4} />
        <Square_box val={5} />
        <Square_box val={6} />
      </div>
      <div className="board_row">
        <Square_box val={7} />
        <Square_box val={8} />
        <Square_box val={9} />
      </div>
    </div>
  )
};

export default Board;