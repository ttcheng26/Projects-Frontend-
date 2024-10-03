var status = 'blue';
var id;
var best = Infinity;
var startTime;

$('body').on("click", function(){
    if(status == 'blue'){
        start();
      
    } else if (status == 'red'){
        tooSoon();
        
    } else{
        showResult();
       
    }
})

function start(){
    $('h1').text('等待綠色');
    $('h2').text('');
    $('body').css('backgroundColor', 'red');
    
    status = 'red';
    var time = Math.random()*10000;
    id = setTimeout(timeOut, time);
}

function timeOut(){
    $('h1').text('點擊!');
    $('h2').text('');
    $('body').css('backgroundColor', 'springgreen');    
    
    status = 'green';
    startTime = Date.now();
}

function tooSoon(){
    $('h1').text('太快了!');
    $('h2').text('');
    $('body').css('backgroundColor', 'royalblue');    
    status == 'blue';
    
    clearTimeout(id);
}

function showResult(){
    // $('h1').text('_ms');
    $('h2').text('');
    $('body').css('backgroundColor', 'red');    
    status == 'blue';
    
    var time = Date.now() - startTime;
    $('h1').text(time + 'ms');
    
    
    if(time < best){
        best = time;
        $('h3').text('最佳紀錄: ' + time + 'ms' );
    }
}
