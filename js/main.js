confirm("Чи бажаєте почати гру?") ? Game() : GameOver();

function Game(){
    console.log('GO!');
}

function GameOver(){
    console.info("Сьогодні ви не виграли мільйон, а могли");
}
//alert("Сьогодні ви не виграли мільйон, а могли");
//confirm();
//
//console.info('Дякуємо за гру, ваш виграш становить ' + yourMoney);
