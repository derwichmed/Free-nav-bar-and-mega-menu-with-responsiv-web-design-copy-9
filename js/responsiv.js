$(function (){
   $('body > header .nav_three .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_three .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
       
       $('body > header .nav_three .nav_bar .nav_bar_item .mega_menu:visible').hide();
       $(this).find('.mega_menu').show();
   });
   
   $('body > header .nav_one .nav_bar .nav_bar_item .sub_menu .sub_menu_item').mouseover(function (){
       $('body > header .nav_one .nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
   });
   
   $('.mobile_resolution .menu_icon img').click(function (){
        $('.big_resolution').fadeIn("slow"); 
   });
   
   $('.close_img img').click(function (){
        $('.big_resolution').fadeOut("slow"); 
   });
});
