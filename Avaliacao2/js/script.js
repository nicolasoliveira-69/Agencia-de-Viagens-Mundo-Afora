$(function () {

  $("#data").datepicker({
    dateFormat: "dd/mm/yy"
  });

 
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    activate: function (event, ui) {
      if (ui.newPanel.length) {
        ui.newPanel.hide().fadeIn(400); 
      }
    }
  });

  
  $("#promo").click(function () {
    $("#mensagemPromo").slideToggle(400); 
  });
});
