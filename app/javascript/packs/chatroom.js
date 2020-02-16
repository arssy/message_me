scroll_bottom = function() {
  if ($("#message-container").length > 0) {
    $("#message-container")[0].scrollTop = $("#message-container")[0].scrollHeight;
  }
}

$(document).on('turbolinks:load', function(){
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  
  scroll_bottom();
});