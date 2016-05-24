$(document).ready(function() {


  $("button#meow").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#user").before("<img src='img/cat.png' alt='Cat'/>")
    $("ul#webpage").prepend("<li>Woof!</li>");
    $("ul#webpage").before('<img src="img/cat.png" alt="Cat" />')

    $('li').click(function() {
      $(this).remove();
    });

    $('img').click(function() {
      $(this).remove();
    });
  });

  $("button#woof").click(function() {
    $("ul#user").prepend("<li>Woof!</li>");
    $("ul#user").after("<img src='img/dog-aromatherapy.jpg' alt='dog'/>");
    $("ul#webpage").prepend("<li>Meow!</li>");
    $('li').css('background-color', 'yellow');


    $('img').click(function() {
      $(this).remove();

  });


  });
});
