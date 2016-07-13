confirm("Чи бажаєте почати гру?") ? Game() : GameOver();



var yourMoney = [10, 5, 2];
var maxNum = 5;
var countTry = 0;
var i = 0;
var count = 3;


function Game(countTry){
  console.log('GO!', countTry);
  maxNum = maxNum * countTry;
  var num = parseInt(Math.random()*maxNum, 10);
  var userTry = prompt("Вгадай число від 0 до " + maxNum);

  do{
    if(userTry == num){
      confirm("хоче продовжити гру?") ? Game(countTry*2) : GameWin(yourMoney[i]);
    }
    else{
      GameOver();
      break;
    }
    i++;
  }while(i < count);
}
function GameWin(x){
  console.info('Дякуємо за гру, ваш виграш становить ' + x + '$');
}
function GameOver(){
  console.info("Сьогодні ви не виграли мільйон, а могли");
}

//confirm();
//

