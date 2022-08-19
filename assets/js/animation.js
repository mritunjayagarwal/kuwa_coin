$('.overlay-over').hide();

var min = 1000, max = 3000;
var fadeMin = 800, fadeMax = 2000;
var numOfImgs = 8;

var interval = setInterval(function() {fadeStart(Math.floor(Math.random() * (numOfImgs - 1) + 1))},400);

function fadeStart(num){
    $('#overlay-'+num).fadeIn((Math.floor(Math.random() * (fadeMax - fadeMin) + fadeMin)), 'swing');
    $('#overlay-'+num).fadeOut((Math.floor(Math.random() * (fadeMax - fadeMin) + fadeMin)), 'swing');
}