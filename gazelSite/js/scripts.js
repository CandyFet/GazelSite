(function($){
  $(function() {
    $('.burger_menu').on('click', function() {
      $(this).closest('.navbar')
        .toggleClass('menu_state_open');
    });

    $('.nav_item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);
