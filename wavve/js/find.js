
    
$(".find-id-button").on('click', function(){ 
    $(".find-phonenum").show();
    $(".find-certify-num").show();
    $(".Find-id-ment").show();
    $('#certify-input').hide();
    $(".find-pw").hide();
});

$(".find-pw-button").on("click", function(){ 
    $(".find-phonenum").hide();
    $(".find-certify-num").hide();
    $(".Find-id-ment").hide();
    $(".find-pw").show();
});

$('.find-certify-button').click(function(){
    $('#certify-input').show();
    // $('#phonenum').prop('disabled',true)
})

$(function(){
    $('#certify-input').hide();
})