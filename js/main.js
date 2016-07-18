confirm("Чи бажаєте почати гру?") ? Game(0, 0) : GameOver();

function Game(gameTry, prevWin){
    var maxCountTry = 3;
    var yourMoney = [10, 5, 2];
    for (var i = 0; i < yourMoney.length; i++) {
        yourMoney[i] = yourMoney[i] * Math.pow(3, gameTry);
    }

    var maxNum = 5;
    maxNum = maxNum * Math.pow(2, gameTry);
    var ourNum = parseInt(Math.random()*maxNum, 10);

    console.log('загадане число: ' + ourNum);

    for(var countTry = 1; countTry <= maxCountTry; countTry++) {

        var userNum = prompt("Вгадай число від 0 до " + maxNum);

        if(userNum == ourNum){
        	if (confirm("хоче продовжити гру?")) {        		
        		Game(gameTry+1, yourMoney[countTry-1] + prevWin);
                break;
            }
        	else {
                console.info('Дякуємо за гру, ваш виграш становить ' + (yourMoney[countTry-1] + prevWin) + '$');
        		break;
        	}        		
        }
        else{
        	if(countTry == maxCountTry){
        		GameOver(); 
        		break;
        	}
        	console.log(yourMoney[countTry] + "$ ще можеш виграти в цьому раунді, пробуй ще, в тебе " + (maxCountTry - countTry) + " спроб");
        }

    }
}

function GameOver(){
  return console.info("Сьогодні ви не виграли мільйон, а могли");
}


