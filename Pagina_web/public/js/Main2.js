




$(document).ready(function () {

  

  $("#LogoKwai").hover(function () {


    $("#LogoKwai").toggleClass(" animated rubberBand");

  });

 
  $("#openbutton").click(function () {

    $("#navmenu").slideToggle();
    


  })


 

  $(window).resize(function () {

    if ($('#dabody').width() >= 768) {

     
     
     

    } else {
     
    
    }

  });





  $("#HideMenu").click(function () {

    $("#menu").slideToggle();


  })





});