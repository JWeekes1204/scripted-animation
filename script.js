$( document ).ready(function()
{
    $("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 10);
    //moves right
    } else if (event.which === 39) {
       //your code here
       
    } else {
        return;
    }
});
});