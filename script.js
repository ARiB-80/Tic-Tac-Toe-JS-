let turn = "X"
let winCombinations = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let moveCounter=0;
let p1=0,p2=0;
let winnerFound = false;

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_game");
let newGame = document.querySelector("#new_game");


let scoreBoard = document.querySelectorAll(".score p");
let winMsg = document.querySelector(".win_msg");


reset.addEventListener("click", ()=>
{
    let val =1;
    for (const box of boxes)
    {
        box.innerText = "";
        box.setAttribute("value",val);
        box.style.color="#EFD6AC";
        val++;
    }
    winMsg.classList.add("hidden"); 
    gameEnd = false;
    winnerFound= false;
    turn = "X";
    moveCounter=0;
});

newGame.addEventListener("click", ()=>
{
    let val =1;
    for (const box of boxes)
    {
        box.innerText = "";
        box.setAttribute("value",val);
        box.style.color="#EFD6AC";
        val++;
    }
    winMsg.classList.add("hidden"); 
    gameEnd = false;
    winnerFound= false;
    turn = "X";
    moveCounter=0;
    p1=0;
    p2=0;
    scoreBoard[0].innerText = `Player 1(X) : ${p1}`;
    scoreBoard[1].innerText = `Player 2(O) : ${p1}`;

});



let gameEnd = false;
boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {
        if(!gameEnd)
        {
            if(box.innerText === "X" || box.innerText === "O")
            {
                // console.log("Box filled");
            }
            else
            {
                box.innerText = turn;
                box.setAttribute("value",turn);
                moveCounter++;
                // console.log(moveCounter);
                // console.log(winnerFound);
                winner();

                if(turn === "X")
                    turn = "O";
                else if(turn === "O")
                    turn = "X";
            }
        }
        else
        {
            console.log("Game Ended");
        }
    })
});


function winner()
{
    
    for (let i = 0; i < 8; i++) 
    {
        let check=[];
        for (let j = 0; j < 3; j++)
        {
            check[j] = winCombinations[i][j];
        }
        
        if((boxes[check[0]].getAttribute("value") === boxes[check[1]].getAttribute("value")) && (boxes[check[1]].getAttribute("value") === boxes[check[2]].getAttribute("value")))
        {
            // console.log(`Player ${turn} wins`);
            gameEnd = true;
            for(let i=0;i<3;i++)
            boxes[check[i]].style.color="#0f9655";
            winnerFound = true;
            winCounter(turn);
            break;
        }
    }
    if(moveCounter === 9 && !winnerFound)
    {

    winMsg.innerText = `Game is a DRAW!!!`;
    winMsg.classList.remove("hidden"); 
    winMsg.style.color="#960f2a";
    for (const box of boxes)
        box.style.color="#960f2a";
    }
}





function winCounter(turn)
{
   if(turn === "X")
   {
        p1++;
        scoreBoard[0].innerText = `Player 1(X) : ${p1}`;
        winMsg.style.color="#0f9655";
        winMsg.innerText = `Player 1(X) wins!!!`;
        winMsg.classList.remove("hidden"); 
   }
   else
   {
        p2++;
       scoreBoard[1].innerText = `Player 2(O) : ${p2}`;
       winMsg.style.color="#0f9655";
       winMsg.innerText = `Player 2(O) wins!!!`;
       winMsg.classList.remove("hidden"); 
   }
   
}
