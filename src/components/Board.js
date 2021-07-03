import React, { useState } from 'react';
import Square_box from './Square_box';

const Board = () => {

  const [ Board, setboard] = useState(Array(9).fill(null)); //we need to pass parameter which will be considered as initial state & since for representing board we need to have an array with all null value so we'll pass Array(9)=>array function with 9 elements & .fill(null)=>function which will fill all the value of array to null   //note: useState() returns an array with two elements: first element is state itself & second element is update function which we can call to update the state    //so instead of storing the returned array in a variable of array, we can destructure the array here with elements Board=>state & setboard=>update function
  const [isXNext, setisXNext]=useState(false);//this state is for keeping track of player, isXNext => store a boolean value & setisXNext will update  
  
  //console.log(statboard);//we can see an array with 9 elements having value "null" in our console window 

  const handlesquareclick = (position)=> {//here will be the logic to update the board

    if(Board[position])//if the square is already filled with eiher O/X then we'll return ie., if Board k uss position pe value hein then we'll simply return
    {
      return;
    }

    setboard((prev)=>{  //this call back function willbe responsible for returning the updated value which will be the new state & our next step must be a new array so we must map the array to new value
      //prev will store current array for eg., it may look like: [X, , , O, X, , , , ] 
      return prev.map((square, pos) => { //.map() => modify the prev array and return the new array 
        if(pos === position)
        {
          return isXNext ? 'X' : 'O';//if it is false, it shows O else shows X
        }

        return square; //this statement returns those element of array on which we didn't click
        // suppose we already had array as [O, , O, X, , , ,O , ]. we clicked on index/pos = 4, then accor to isXNext, the either X or O will get set if it is already not set and in new array, we'll get either O or X at pos/index = 4 but the remaining values of prev will be same & programmatically we do this by returning the element wihout any checking or condition so we do simply "return square"
      })

    })// until now we will get our new array for board but after each assignment of either X or O, we need to alter the value which will indicate alter in the player. since for state of player we have: isXNext => false/true & setisXNext=> function for updating isXNext ie., if true then false else true
    setisXNext((value) => !value); //here value may contain true/false
  };

  const rendersquare = (position)=>{
    return (
      <Square_box val={Board[position]} onClick={()=>{
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