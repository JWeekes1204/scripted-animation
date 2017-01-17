$( document ).ready(function()
{

var $pic = $("#pic");
var ground = $('ground');
var picTop = $("#pic").offset().top;
var picBottom = picTop + $('#pic').height();
var groundTop = $("#ground").offset().top;
var groundBottom = groundTop + $('#ground').height();
$pic.click(function(){
    setInterval(function(){$pic.css("top", $pic.offset().top + 20);}, 1000);
    
  console.log("hello");
});
function myStopFunction() {
    setInterval(function(){
        if (picBottom >= groundTop) {
            clearInterval(var $pic);
            
        }
        $pic.css("top", $pic.offset().top + 20);
        
    }, 1000);
}
});