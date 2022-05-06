function hiddenMenu(){
    $('.side-menu').addClass('isHidden');
    $('.masks').removeClass('mask');
    $('.masks').hide();
    $('.side-menu').removeClass('isShow');
}
function toggleMenu(){
    if (document.body.offsetWidth < 1024){
        if (!$('.side-menu').hasClass('isHidden')){
            $('.side-menu').addClass('isHidden');
            $('.masks').removeClass('mask');
            $('.masks').hide();
            $('.side-menu').removeClass('isShow');
        } else {
            $('.side-menu').addClass('isShow');
            $('.masks').addClass('mask');
            $('.masks').show()
            $('.side-menu').removeClass('isHidden');
        }
    }
}
$(document).pjax('a', '#view',{
    fragment: '#view',
    timeout: 8000
})

$(document).on('pjax:send',(e)=>{
    e.target.classList.add('isLoading');
    setTimeout(() => {
        hiddenMenu()
    }, 0);
})
$(document).on('pjax:complete', (e)=>{
    
    setTimeout(() => {
        e.target.classList.add('finishLoading');
        e.target.classList.remove('isLoading');
        e.target.classList.remove('finishLoading');
    }, 100);
})