var level = 0;
var correct = true; 
var timer = 0;




start();

function start(){
    level++;
    $('#level').text('level:' + level);
    
    var a = Math.floor(Math.random()*10);
    var b = Math.floor(Math.random()*10);
    
    var answer = a + b;
    
    correct = Math.random() > 0.5;
    if(!correct){
        answer += Math.ceil(Math.random()*5);
    }
    
    $('#formula').text(a + ' + ' + b + ' = ' + answer);
    
    timer = 0;
}



function gameOver(){
    $('button').hide();
    $('#gameover').show();
    clearInterval(id);
}

$('#btn-yes').click(function(){
    if(correct){
        start();
    } else{
        gameOver();
    }
})


$('#btn-no').click(function(){
    if(!correct){
        start();
    } else{
        gameOver();
    }
})


var id = setInterval(function(){
    timer += 0.1;
    $('#bar').css('width', timer + '%')
    
    if(timer > 100){
        gameOver();
    }
    
})





