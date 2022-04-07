$( document ).ready(function() {
    $('.menu-hamburguer').on("click",function(){
        $(".conteudo-menu").toggleClass("ativo");
        $("ul").toggleClass("ativo");
    })

    $(window).scroll(function(){
        if($(document).scrollTop() > 300)
      {
          $('nav').addClass("ativo");
          $('#menu').css("width","100%");
      }
      else
        {
          $('nav').removeClass("ativo");
          $('#menu').css("width","90%");
        }
      });
});

