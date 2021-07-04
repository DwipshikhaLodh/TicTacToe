import React from 'react';

const History = ({history, moveTo, movenum}) => {
    //we need to display some buttons as unordered list on every click on the square(as on first click, history will have 2 object, on 2nd click, history will have 3 object and soon, so with respect to each object at any move/instant, we want corresponding buttons in a list ie., on 2nd click we'll have 3 objects and so we'll need to display 3 buttons in a list and soon), as for this we have to keep track of array of history at every move to check the number of objects it has at that moment, so we'll use .map() for tracking purpose & map() also have an argument of "moveindex" which implies the index of objects inside history array at that instant.   And as we need buttons corresponding with the objects inside history array so we will return the <li> consisting of <button> tag inside the .map(). Now in button we need some logical comments/text so for that, we'll use ternery operator (since .map() will iterate over each objects inside the array history so suppose at a moment, there are 4 objects ie., after we played our 3rd move,    so we have:      4 objects with their respective moveindex from 0 to 3.  => first object , moveindex=0, so ternery checks:  moveindex === 0 => gives true & thus 1st string gets displayed.    => second object,   moveindex=1,   so ternary checks:   moveindex === 0  => gives false & thus 2nd string gets displayed along with the moveindex, which is 1.  => third object, ternary checks:  moveindex === 0 => gives false thus 2nd string gets displayed along with its respective moveindex which is 2 & soon... ) 
    return (
        <ul>
            {
                history.map((_, moveindex) => {
                    return (
                        <li key={moveindex}>
                            <button
                            style={
                                {
                                    fontWeight: movenum === moveindex ? "bold" : "normal",
                                }
                            }
                            type="button" onClick={() => {
                                moveTo(moveindex);
                            }}>{moveindex === 0 ? 'Go To Game Start' : `Go To Move ${moveindex}`}</button>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default History;

//in style it will check as:
//     suppose we are yet to start the game, so we only 1 object in history with movenum=0(movenum=>index of array) 
//     at first rendering time/mounting time, everything will get rendered so this time .map() will start with index 0 and will check before rendering that is movenum(0) === moveindex(0) => which is true & thus we get our styling as bold & soon for other instances of playing as when we'll click for 3 time, that time current index of history/movenum= 2 and then while rendering, inside .map() in style, ternary operator will start checking as:
//     we have movenum=2
//     in mapping,   when moveindex=0, i.e., we are iterating the first object of the history array so:
//                          is movenum === moveindex ? =>false & so styling is normal
//                   when moveindex=1, i.e., we are iterating the 2nd object of the history array so:
//                           is movenum === moveindex ? =>false & so styling is normal
//                   when moveindex=2, i.e., we are iterating the 3nd object of the history array so:
//                           is movenum === moveindex ? =>true & so styling is bold


// and when we click on any particular button then because of event listener, the function moveTo() gets called by passing argument->moveindex & inside moveTo(), setmovenum() will get called with the argument move<-->moveindex, then in history, the index(movenum) get value of moveindex & thus the object at that index get displayed in our board game and for styling:
// suppose we clicked on 3rd button -> now above comments will get execute and movenum=2, then in styling the checking will go as:
//       movenum=2
//                    when moveindex=0, i.e., we are iterating the first object of the history array so:
//                          is movenum === moveindex ? =>false & so styling is normal
//                   when moveindex=1, i.e., we are iterating the 2nd object of the history array so:
//                           is movenum === moveindex ? =>false & so styling is normal
//                   when moveindex=2, i.e., we are iterating the 3nd object of the history array so:
//                           is movenum === moveindex ? =>true & so styling is bold
// and all others button text will have normal fontweight