$(function () {
  // Inicializa o Datepicker no campo de data
  $("#data").datepicker({
    dateFormat: "dd/mm/yy"
  });

  // Inicializa o Accordion com efeito de fade
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    activate: function (event, ui) {
      if (ui.newPanel.length) {
        ui.newPanel.hide().fadeIn(400); // Efeito de fade ao trocar painel
      }
    }
  });

  // Botão de promoção com efeito de slideToggle
  $("#promo").click(function () {
    $("#mensagemPromo").slideToggle(400); // Mostra/oculta a promoção com slide
  });
});
