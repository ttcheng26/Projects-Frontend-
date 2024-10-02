var current = 'O';
var playing = true;
$(".grid div").click(place);

function place(){
    if ($(this).text() == '' && playing == true){
        $(this).text(current);
        if (current == 'O'){
            current = 'X';
            $(this).removeClass('gray');
            $(this).addClass('orange');
        } else {
            current = 'O';
            $(this).removeClass('gray');
            $(this).addClass('red');
        }
    }
    
    var a = $('#a').text();
    var b = $('#b').text();
    var c = $('#c').text();
    var d = $('#d').text();
    var e = $('#e').text();
    var f = $('#f').text();
    var g = $('#g').text();
    var h = $('#h').text();
    var i = $('#i').text();
    
    check(a, b, c);
    check(d, e, f);
    check(g, h, i);
    check(a, d, g);
    check(b, e, h);
    check(c, f, i);
    check(a, e, i);
    check(c, e, g);
    
}



function check(x, y, z){
    if(x == y && y == z && x != ''){
        $('h1').text(x + '獲勝');
        playing = false;
    }
}


$('button').click(restart);



function restart(){
    playing = true;
    $('h1').text('Tic Tac Toe');
    $('.grid div').text('');
    
    $('.grid div').removeClass('red');
    $('.grid div').removeClass('orange');
    $('.grid div').addClass('gray');    
}














