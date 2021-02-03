console.log("hello");

var $one = $("#j1");
var $two = $("#r1");
var $three = $("#j2");
var $four = $("#r2");
var $five = $("#j3");
var $six = $("#r3");

$one.on("click", function(){
    $(this).hide();
    $two.show();
    $("main").css("background-color", "#FF9EA1");
    $(".button").css("background-color", "#FF9EA1");
    
    $("header").css("background-color", "#A1FF9E");
    $("footer").css("background-color", "#A1FF9E");
    
    $(".button").css("border", "2px solid #9efffc");
    $("header").css("border-bottom", "2px solid #9efffc");
    $("footer").css("border-top", "2px solid #9efffc");
})

$two.on("click", function(){
    $(this).hide();
    $three.show();
    $("main").css("background-color", "#A1FF9E");
    $(".button").css("background-color", "#A1FF9E");
    
    $("header").css("background-color", "#9efffc");
    $("footer").css("background-color", "#9efffc");
    
    $(".button").css("border", "2px solid #FF9EA1");
    $("header").css("border-bottom", "2px solid #FF9EA1");
    $("footer").css("border-top", "2px solid #FF9EA1");
})

$three.on("click", function(){
    $(this).hide();
    $four.show();
    $("main").css("background-color", "#9efffc");
    $(".button").css("background-color", "#9efffc");
    
    $("header").css("background-color", "#FF9EA1");
    $("footer").css("background-color", "#FF9EA1");
    
    $(".button").css("border", "2px solid #A1FF9E");
    $("header").css("border-bottom", "2px solid #A1FF9E");
    $("footer").css("border-top", "2px solid #A1FF9E");
})

$four.on("click", function(){
    $(this).hide();
    $five.show();
    $("main").css("background-color", "#FF9EA1");
    $(".button").css("background-color", "#FF9EA1");
    
    $("header").css("background-color", "#A1FF9E");
    $("footer").css("background-color", "#A1FF9E");
    
    $(".button").css("border", "2px solid #9efffc");
    $("header").css("border-bottom", "2px solid #9efffc");
    $("footer").css("border-top", "2px solid #9efffc");
})

$five.on("click", function(){
    $(this).hide();
    $six.show();
    $("main").css("background-color", "#A1FF9E");
    $(".button").css("background-color", "#A1FF9E");
    
    $("header").css("background-color", "#9efffc");
    $("footer").css("background-color", "#9efffc");
    
    $(".button").css("border", "2px solid #FF9EA1");
    $("header").css("border-bottom", "2px solid #FF9EA1");
    $("footer").css("border-top", "2px solid #FF9EA1");
})

$six.on("click", function(){
    $(this).hide();
    $one.show();
    $("main").css("background-color", "#9efffc");
    $(".button").css("background-color", "#9efffc");
    
    $("header").css("background-color", "#FF9EA1");
    $("footer").css("background-color", "#FF9EA1");
    
    $(".button").css("border", "2px solid #A1FF9E");
    $("header").css("border-bottom", "2px solid #A1FF9E");
    $("footer").css("border-top", "2px solid #A1FF9E");
})