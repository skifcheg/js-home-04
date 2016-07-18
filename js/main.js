
confirm("Чи бажаєте почати гру?") ? Game(1, 0) : GameOver();


function Game(gameTry, prevWin){

    var yourMoney = [10, 5, 2];
    var maxCountTry = 3;
    var maxNum = 5;
    var num = parseInt(Math.random()*maxNum, 10);

    if(gameTry > 1){
		for (var i = 0; i < yourMoney.length; i++) {
        	yourMoney[i] = yourMoney[i] * 3 * (gameTry-1);
    	}
		maxNum = maxNum * Math.pow(2, gameTry-1);
    }  

    	console.log(
	    	'countTry ' + countTry, 
	    	'\n maxNum ' + maxNum, 
	    	'\n gameTry ' + gameTry, 
	    	'\n num ' + num,
	    	'\n prevWin ' + prevWin	    	    	
    	);


    for(var countTry = 1; countTry <= maxCountTry; countTry++) {

        var userNum = prompt("Вгадай число від 0 до " + maxNum);
        console.log('userNum ' + userNum);

        if(userNum == num){

        	console.log('win', '\n gameTry' + gameTry, '\n countTry' + countTry, '\n prevWin ' + prevWin);

        	if (confirm("хоче продовжити гру?")) {        		
        		Game(gameTry+1, yourMoney[countTry-1] + prevWin);
        		} 
        	else {
        		GameWin(yourMoney[countTry-1] + prevWin);
        		break;
        	}        		
        }

        else{
        	if(countTry == maxCountTry){
        		GameOver(); 
        		break;           	
        	}
        	console.log(yourMoney[countTry] + "$ можеш виграти, пробуй ще, в тебе " + (maxCountTry - countTry) + " спроб");

        }

    }
}
function GameWin(x){
  return console.info('Дякуємо за гру, ваш виграш становить ' + x + '$');
}
function GameOver(){
  return console.info("Сьогодні ви не виграли мільйон, а могли"); 
}


