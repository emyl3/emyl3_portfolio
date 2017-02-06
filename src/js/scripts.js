(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    $('.image').hover(
      function () {
        $(this).find('.post-content').css('display', 'block');
      },

      function () {
      $(this).find('.post-content').css('display', 'none');
    }
  );

  });

})(jQuery, window, document);
