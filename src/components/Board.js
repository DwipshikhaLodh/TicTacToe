import React from 'react';
import Square_box from './Square_box';

const Board = ({ board, handlesquareclick }) => {

  const rendersquare = (position)=>{
    return (
      <Square_box val={board[position]} onClick={()=>{
        handlesquareclick(position)
      }} />
    );
  };

  //since in return part we write JSX, so for writing rendersquare(), which is JS, we need {}
  return (
    <div className="board">
      <div className="board_row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board_row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board_row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  )
};

export default Board;