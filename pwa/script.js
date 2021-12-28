
    /*========================
      Manifest js
      ==========================*/

    $(window).on('load', function () {
        'use strict';
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('sw.js');
        }
    });

  