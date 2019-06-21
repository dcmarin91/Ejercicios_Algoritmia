var correct;
var score=0;
$('.option').on('click',guess)
game();

function guess(){
    var index = $('.option').index(this)
    if(index===correct){
        alert('Bien');
        score++;
    }else{
        alert('que mal')
        score=0;
    }
    $('.score span').text(score);
    game();
}

function game(){
    correct = Math.floor(Math.random()*2);
    $('.option').each(function(index){
        var color= generateColor();
        $(this).css('background-color',color);
        if(index===correct){
           $('.question').text(color);
        }
    });
}


function random(){
   return Math.floor(Math.random()*255); 
}

function generateColor(){
    return 'rgb('+random()+','+random()+','+random()+')'
}