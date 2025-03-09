function promptInput(){
    const userInput = parseInt(prompt("Enter 1,2 or 3 for rock,paper and scissors respectively."))
    play(userInput)
}

function play(userInput){
    const randomNumber = parseInt(Math.floor(Math.random() * (3 - 1 + 1)) + 1)
    if(userInput === 1 && randomNumber === 1){
        console.log("It is a draw!!,both are rocks")
        promptInput()
    }else if(userInput === 1 && randomNumber === 2){
        console.log("You lost ,paper beats rock!!")
        promptInput()
    }else if(userInput === 1 && randomNumber === 3){
        console.log("You win ,rock beats scissors!!")
        promptInput()
    }else if(userInput === 2 && randomNumber === 1){
        console.log("You win ,paper beats rock!!")
        promptInput()
    }else if(userInput === 2 && randomNumber === 2){
        console.log("It is a draw!!,both are papers")
        promptInput()
    }else if(userInput === 2 && randomNumber === 3){
        console.log("You lost ,scissors beats paper!!")
        promptInput()
    }else if(userInput === 3 && randomNumber === 1){
        console.log("You lost ,rock beats scissors!!")
        promptInput()
    }else if(userInput === 3 && randomNumber === 2){
        console.log("You win ,scissors beats paper!!")
        promptInput()
    }else if(userInput === 3 && randomNumber === 3){
        console.log("It is a draw!!,both are a pair of scissors")
        promptInput()
    }else{
        console.log("Invalid input ,Enter 1,2 or 3 for rock,paper and scissors respectively.")
        promptInput()
    }
}

promptInput()