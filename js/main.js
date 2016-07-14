
confirm("Чи бажаєте почати гру?") ? Game(1) : GameOver();

function Game(gameTry){

    var yourMoney = [10, 5, 2];
    var countTry = 1;
    var maxCountTry = 3;
    var maxNum = 5 * gameTry;
    var num = parseInt(Math.random()*maxNum, 10);

    console.log('gameTry ' + gameTry);

    for (var i = 0; i < yourMoney.length; i++) {
        yourMoney[i] = yourMoney[i] * 3 * gameTry;
    }

    maxNum = maxNum * gameTry;
    console.log('countTry ' + countTry, 'maxNum ' + maxNum, 'gameTry ' + gameTry, 'num ' + num);

    for(var countTry = 0; countTry < maxCountTry; countTry++){

        console.log('yourMoney ' + yourMoney[countTry] + '$', 'countTry ' + countTry);

        var userNum = prompt("Вгадай число від 0 до " + maxNum);
        console.log('userNum ' + userNum);

        if(userNum == num){
            console.log('win', 'gameTry' + gameTry, 'countTry' + countTry);
          //confirm("хоче продовжити гру?") ? Game(countTry*2) : GameWin(yourMoney[i]);
        }
        else{
            console.log('fail', 'countTry ' + countTry);
            console.log('maxCountTry ' + maxCountTry);

            //GameOver();
        }
    }
}
function GameWin(x){
  console.info('Дякуємо за гру, ваш виграш становить ' + x + '$');
}
function GameOver(){
  console.info("Сьогодні ви не виграли мільйон, а могли");
}

//confirm();
//

