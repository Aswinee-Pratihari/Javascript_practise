const userChoice=prompt("what is your choice (Enter the numbers) \n1.Rock\n2.Paper\n3.Scissor");

const compChoice=Math.floor(Math.random()*3)+1;
console.log(compChoice)

userChoice==compChoice?alert('Draw'):userChoice==1&&compChoice==2?alert('Comp Wins'):userChoice==2&&compChoice==3?alert('Comp Wins'):userChoice==3&&compChoice==1?alert('Comp Wins'):alert('User Wins')