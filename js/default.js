$( document ).ready(function() {
    $('.menu-hamburguer').on("click",function(){
        $(".conteudo-menu").toggleClass("ativo");
    })

    $(window).scroll(function(){
        if($(document).scrollTop() > 0)
      {
          $('nav').addClass("ativo");
      }
      else
        {
          $('nav').removeClass("ativo");
        }
      });
});

