$(function() {
  
  $("#accordion").accordion();

 
  $("#data").datepicker({
    dateFormat: "dd/mm/yy"
  });

  $("#promo").click(function() {
    $("#mensagemPromo").slideToggle();
  });
});
