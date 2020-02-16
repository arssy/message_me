$(document).on('turbolinks:load', function(){
  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });

  $('.message').setTimeout(function(){
    $(this).transition('fade');
  }, 10000);

});