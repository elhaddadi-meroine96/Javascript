let min=20;
let max=80;

function randomGenerator(){
    do{
        var random=Math.round(Math.random()*80);
    }while(random<min);
    return random;
}

function test(userInput, randomNumber){
    if(userInput<randomNumber){
        return 1;
    }
    else if(userInput>randomNumber){
        return 2;
    }
    else if(userInput===randomNumber){
        return 3;
    }
    else{
        return 4;
    }
}

function justePrix(){
    let randomNumber=randomGenerator();
    let playerTry=0;
    let userInput=0;
    let message=0;
    let boring=0;
    let sentence="";

    do{
        
        boring=0;
        playerTry++;

        do{

            switch(boring){
                case 0:
                    sentence=" Trouve un chiffre qui se trouve entre "+min+" et "+max+":";
                    boring++;
                break;
                default:
                    boring=9001;
                    console.log("");
                break;
            }

            if(boring<9000){
                userInput=Number(prompt(sentence));
            }
            else{
                alert(sentence);
            }

        }while(((isNaN(userInput)||userInput>80||userInput<20))&&boring<9000);

        if(boring<9000){

            message=test(userInput,randomNumber);

            switch(message){
                case 1:
                    alert("C'est plus");
                break;
                case 2:
                    alert("C'est moins");
                break;
                case 3:
                    alert("C'est juste tu as trouvé en "+playerTry+" coups!");
                break;
                default:
                break;
            }

        }

    }while((message<3||message>3)&&boring<9000);

}
