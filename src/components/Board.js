import React from 'react';
import Square_box from './Square_box';

const Board = ({ board, handlesquareclick , winningcomb}) => {

  const rendersquare = (position)=>{

    const iswinningsquare = winningcomb.includes(position);//here it checks     //here the variable will receive a boolean value which we will pass to square component

    return (
      <Square_box val={board[position]} onClick={()=>{
        handlesquareclick(position)}} iswinningsquare={iswinningsquare} />
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