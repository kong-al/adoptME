$("#id").keypress(function(e){
    if(e.keypress < 6 )
    $(".error-msg").css("display",'block');
})