(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    //gets year for copyright
    var currentYear = new Date().getFullYear();

    $(function () {
      $('.copyrightyear').text(currentYear);
    });

    //github footer icon hover effect
    $('#github').hover(
      function () {
        $(this).find('img').attr('src', '/assets/img/github_icon_blue.png');
      },

      function () {
        $(this).find('img').attr('src', '/assets/img/github_icon_white.png');
      }
    );

    //linkedin footer icon hover effect
    $('#linkedin').hover(
      function () {
        $(this).find('img').attr('src', '/assets/img/linkedin_icon_blue.png');
      },

      function () {
        $(this).find('img').attr('src', '/assets/img/linkedin_icon_white.png');
      }
    );

  });

})(jQuery, window, document);
