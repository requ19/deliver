$(document).ready(function () {

    $('.burger').on('click', function(){
        $('.burger').toggleClass('active')
        if($('.header .list')[0].className.includes('active')){
            $('.header .list').fadeOut(1000)
        } else{
            $('.header .list').fadeIn(1000)
        }
        $('.header .list').toggleClass('active')

    })

});