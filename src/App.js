import React , { useState } from "react";
import Board from './components/Board';
import History from './components/History';
import { CalculateWinner } from "./helpers";
import './styles/root.scss';
import Statusmessage from './components/Statusmessage';


const App = () => {

  
  //const [ board, setboard] = useState(Array(9).fill(null));           //we need to pass parameter which will be considered as initial state & since for representing board we need to have an array with all null value so we'll pass Array(9)=>array function with 9 elements & .fill(null)=>function which will fill all the value of array to null   //note: useState() returns an array with two elements: first element is state itself & second element is update function which we can call to update the state    //so instead of storing the returned array in a variable of array, we can destructure the array here with elements Board=>state & setboard=>update function


  //this above codeline(in 10) will get modified as:
  const [history, sethistory] = useState([{board: Array(9).fill(null), isXNext: true },]);   //useState here will return an array of objects, each objects have two keys: board & isXNext  to history and sethistory will be able to update the array of history 

  const [movenum, setmovenum] = useState(0);//to track on current move number

  const current = history[movenum];//shortcut

  //console.log("history : ", history);    //to see the history in our console

  //const [isXNext, setisXNext]=useState(false);                  //this state is for keeping track of player, isXNext => store a boolean value & setisXNext will update    // this along with line 10 get modified to line 14
  
  //console.log(statboard);//we can see an array with 9 elements having value "null" in our console window 

  //const winner= CalculateWinner(board);              //here we have the returned value that until now did we get any winner(if we got then in winner we'll have either O or X) or if we didn't got any winner than who is gonna play the next move(this will be showed by applying ternery on isXNext)      //will get modified to codeline 

  //const winner= CalculateWinner(current.board);      //before implementing feature of highlighting the winner conmbination
  const { winner, winningcomb}= CalculateWinner(current.board); //since now CalculateWinner will return an object with two keys. so we'll destructure the array over here


  //const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isXNext ? 'X' : 'O'}`;         //isXNext modified to current.isXNext       //before using seperate component of message, the logic for message was here

  const handlesquareclick = (position)=> {//here will be the logic to update the board

    if(current.board[position] || winner)//if the square is already filled with eiher O/X then we'll return ie., if Board k uss position pe value hein then we'll simply return
    {
      return;
    }

    sethistory((prev)=>{  //this call back function willbe responsible for returning the updated value which will be the new state & our next step must be a new array so we must map the array to new value

      const last = prev[prev.length - 1]; //to get the latest board state. It will the last object of the prev array 

      //prev will store current array for eg., it may look like: [X, , , O, X, , , , ] 
      const newboard = last.board.map((square, pos) => { //.map() => modify the prev array and return the new array      //prev.map() => last.board.map() and instead of returning (last.board.map()), we'll store it in a variable "newboard"
        if(pos === position)
        {
          return last.isXNext ? 'X' : 'O';//if it is false, it shows O else shows X        //isXNext => last.isXNext ==>to get value of isXNext of last object of history array
        }

        return square; //this statement returns those element of array on which we didn't click
        // suppose we already had array as [O, , O, X, , , ,O , ]. we clicked on index/pos = 4, then accor to isXNext, the either X or O will get set if it is already not set and in new array, we'll get either O or X at pos/index = 4 but the remaining values of prev will be same & programmatically we do this by returning the element wihout any checking or condition so we do simply "return square"
      });

      return prev.concat({board: newboard, isXNext: !last.isXNext}); //here we will each time on clicking on any square, after that two things will happen here: first, the new board and new value of isXNext will get added in last/ concatinated at the last of the prev(prev reprsents history array). second, the updated prev will be returned and we'll set the history

    });// until now we will get our new array for board but after each assignment of either X or O, we need to alter the value which will indicate alter in the player. since for state of player we have: isXNext => false/true & setisXNext=> function for updating isXNext ie., if true then false else true

    //setisXNext((value) => !value);           //here value may contain true/false

    setmovenum(prev => prev + 1); //to update move number by each time
  };

  const moveTo = (move) => { //will transfered as custom attribute & move is a parameter that will receive value of moveindex which will be passed at the time of calling when button will be clicked
    setmovenum(move)//it set the movenum to 1 so that history having object at movenum 1 will be displayed in the board game 
  };

  const newgame= () => {
    sethistory([{board: Array(9).fill(null), isXNext: true },]);//to reset to initial value of board by using sethistory() of State  
    setmovenum(0);//to reset the index to 0 
  }

  return (
    <div className="app">
      <h1>Tic <span className="text_green">Tac</span> Toe</h1>
      <Statusmessage winner={winner} current={current}/> 
      <Board board={current.board} handlesquareclick={handlesquareclick} winningcomb={winningcomb} />
      <button type="button" onClick={newgame} className={`btn_reset ${winner || ( current.board.every(e1 => e1 !== null))? 'active' : ''}`}>Start New Game</button>
      <h2 >Current Game History</h2>
      <History history={history} moveTo={moveTo} movenum={movenum}/>
      <div className="bg_balls b1"/>
      <div className="bg_balls b2"/>
    </div>
  );
};

export default App;

//before using seperate component of messages, it was rendered as:  <h2>{message}</h2>

//winner || ( current.board.every(e1 => e1 !== null) => this means if there is winner or if there is tie then the classname "active" of the button will get assigned 