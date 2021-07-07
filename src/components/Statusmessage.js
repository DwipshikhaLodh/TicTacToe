import React from 'react';


const Statusmessage = ({winner, current}) => {  
    //const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isXNext ? 'X' : 'O'}`; 

    const nonextmove = current.board.every(e1 => e1 !== null);//.every() will iterate over each element. In the current state of board's array,
    //inside .every(), a call back function in present with object e1(which represent the elments of array) and this function will return true(if all the elements != null ie., if all elements are full) to variable nonextmove & function will return false(if any of the elements == null ie., if any elements is empty) to variable nonextmove 
    return <h3>{winner && `Winner is ${winner}`}
    {!winner && !nonextmove && `Next Player is ${current.isXNext ? 'X' : 'O'}`}
    {!winner && nonextmove && 'Tie in X and O'}</h3>
};

export default Statusmessage;