// $(function(){
//     $('.m_menu').click(function(){
//         $('.gnb_wrap').show();
//     })
    
//     $('.close').click(function(){
//         $('.gnb_wrap').hide();
    
// });

$(function(){
    $('.m_menu').click(function(){
        $('.gnb_wrap').animate({'left':0},300);
        $('.cover').fadeIn();
      
    })
    $('.close').click(function(){
        $('.cover').fadeOut();
        $('.gnb_wrap').animate({'left':'-100%'},300);
    })

    $('.gnb_wrap .menulist>li').click(function(){
        $('.gnb_wrap .menulist>li').find('.menulist_depth2').stop().slideUp()
        $(this).find('.menulist_depth2').stop().slideToggle()   
    })
    $('.gnb_wrap .menulist>li>a').click(function(){
        $(this).toggleClass('on')
    })
});