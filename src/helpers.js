export function CalculateWinner(square){  //it takes "square" as a variable which will hold the current element of array
    const lines = [   //this is a object where we put down all the possible combination for winning the game
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i=0; i<lines.length; i++)
    {
        const [a, b, c]= lines[i];
        
        if(square[a] && square[a] === square[b] && square[a] === square[c])  //check for each combination listed above does have same value or not
        {
            return square[a];      //if does then will return the value stored in square(can be either O or X)
        }
    }

    return null; //if in any of the combination, the value doesn't match then will return null
}