$( document ).ready(function() {
    $('.menu-hamburguer').on("click",function(){
        $(".conteudo-menu").toggleClass("ativo");
    })

    $(window).scroll(function(){
        if($(document).scrollTop() > 50)
      {
          $('nav').addClass("ativo");
      }
      else
        {
          $('nav').removeClass("ativo");
        }
      });
});

