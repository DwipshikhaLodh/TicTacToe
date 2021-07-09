import React from 'react';


const Statusmessage = ({winner, current}) => {  
    //const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isXNext ? 'X' : 'O'}`; 

    const nonextmove = current.board.every(e1 => e1 !== null);//.every() will iterate over each element. In the current state of board's array,
    //inside .every(), a call back function in present with object e1(which represent the elments of array) and this function will return true(if all the elements != null ie., if all elements are full) to variable nonextmove & function will return false(if any of the elements == null ie., if any elements is empty) to variable nonextmove 
    return (
    <div className="status_message">
        {winner && <>
        Winner is {' '} <span className={winner === 'X' ? 'text_green' : 'text_orange'}>{winner}</span>
        </>}
        {!winner && !nonextmove && <>
            Next Player is <span className={current.isXNext? 'text_green' : 'text_orange'}>{current.isXNext ? 'X' : 'O'}</span>
        </>}
        {!winner && nonextmove && <>
        Tie in <span className="text_green">X</span> and <span className="text_orange">O</span>
        </>}
    </div>
    );
};

export default Statusmessage;

// earlier it was : { winner && `Winner is ${winner}`}
// we had change the above commented to new one because we want that if winner is X then the class assigned must be "text_green" and if not than "text_orange" 
// {winner === 'X' ? 'text_green' : 'text_orange'} => this JS logic will return the className as a string since string interpolation always gives a string , which will get assigned to the attribute className of span tag ie., only for winner 
// and since the span tag along with the line "Winner is ..." have more than one component so we need to return all this inside <></>

//`Next Player is ${current.isXNext ? 'X' : 'O'}` is changed to new one

//'Tie in X and O'

//<>
//Winner is
//<span className={winner === 'X' ? 'text_green' : 'text_orange'}>{winner}</span>
//</>

//<>
//Next Player is 
//<span className={current.isXNext ? 'text_green' : 'text_orange'}>{current.isXNext ? 'X' : 'O'}</span>
//</>

// <>
//Tie in <span className="text_green">X</span> and <span className="text_orange">O</span>
//</>
