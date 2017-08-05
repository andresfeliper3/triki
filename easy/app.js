var main = function () {

//Victoria o derrota
  $('.game').mouseover(function(){
    function Andreah(n1,n2,n3) {
      if($('#s'+n1+'s').hasClass('azul') && $('#s'+n2+'s').hasClass('azul') && $('#s'+n3+'s').hasClass('azul')) {
          $('.game').hide();
          $('.victoria').show();
      }
    }
    Andreah('1','2','3');
    Andreah('1','4','7');
    Andreah('1','5','9');
    Andreah('2','5','8');
    Andreah('3','6','9');
    Andreah('4','5','6');
    Andreah('3','5','7');

    function Yo(n1,n2,n3) {
      if($('#s'+n1+'s').hasClass('equis') && $('#s'+n2+'s').hasClass('equis') && $('#s'+n3+'s').hasClass('equis')) {
          alert('¡Perdiste!');
      }
    }
    Yo('1','2','3');
    Yo('1','4','7');
    Yo('1','5','9');
    Yo('2','5','8');
    Yo('3','6','9');
    Yo('4','5','6');
    Yo('3','5','7');

  });

  $('.square').click(function(){
    //Botón de reiniciar

    if($('.azul').length===1) {
      $('.estorbo').append('<button class="finish">Reiniciar</button>');
    }
    //Click del jugador
      if($(this).hasClass('azul')) {
          alert("No vale hacer click en la misma casilla\nDebes volver a empezar");
          location.reload();
      } else if($(this).hasClass('equis')) {
          alert("No vale hacer click en una casilla ya marcada\Debes volver a empezar");

          location.reload();
      }
      else {
        $(this).addClass('azul');
      }
    //Turno del pc
    var tiro = Math.floor(Math.random()*9+1);
    console.log(tiro);

    //No lanzar un número ya ocupado


  while($('#s'+tiro.toString()+'s').hasClass('azul') || $('#s'+tiro.toString()+'s').hasClass('equis')) {
    function noRepeat(val) {
         if($('#s'+val+'s').hasClass('azul')) {
           tiro = Math.floor(Math.random()*9+1);
           console.log(tiro);
         }
           else if ($('#s'+val+'s').hasClass('equis')) {
             tiro = Math.floor(Math.random()*9+1);
           console.log(tiro);
         }
       }
       noRepeat('1');
       noRepeat('2');
       noRepeat('3');
       noRepeat('4');
       noRepeat('5');
       noRepeat('6');
       noRepeat('7');
       noRepeat('8');
       noRepeat('9');

//Cuando ya hayan 4 casillas rojas marcadas, se detiene el bucle
       if($('.equis').length>=4) {
         break;
       }
  }


  switch(tiro) {
    case 1:
    $('#s1s').addClass('equis');
    break;
    case 2:
    $('#s2s').addClass('equis');
    break;
    case 3:
    $('#s3s').addClass('equis');
    break;
    case 4:
    $('#s4s').addClass('equis');
    break;
    case 5:
    $('#s5s').addClass('equis');
    break;
    case 6:
    $('#s6s').addClass('equis');
    break;
    case 7:
    $('#s7s').addClass('equis');
    break;
    case 8:
    $('#s8s').addClass('equis');
    break;
    case 9:
    $('#s9s').addClass('equis');
    break;
  }
  });


  //Reiniciar
  $(document).on('click','.finish',function(){
      location.reload();
  });
};
$(document).ready(main);
