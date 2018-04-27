/**
 * bootstrap.masonry.js - Masonry Bootstrap 3 (https://github.com/gustavoconci/bootstrap.masonry.js)
 * Copyright (c) 2017-2018, Gustavo Henrique Conci. (MIT Licensed)
 */

(function($) {
    function media(feature) {
        return typeof window.matchMedia === 'undefined' || window.matchMedia(feature).matches;
    }

    $.fn.masonry = function() {
        var $masonry = $(this),
            $els = $masonry.find($masonry.attr('data-target')),

            init = function() {
                var repeat = function(num, text) {
                    return new Array(Math.ceil(num)+1).join(text);
                },
                cols = {},
                widths = { 'lg': 1200, 'md': 992, 'sm': 768, 'xs': 0 }
                data = $masonry.data();

                for (var index in data) {
                    if (index.indexOf('col') < 0) continue;
                    var width = index.replace('col', '').toLowerCase();
                    if (media('(min-width: ' + widths[width] + 'px)')) {
                        var colNumber = data[index],
                            colLength = 12 / colNumber;
                        cols = {
                            length: colLength,
                            html: repeat(colLength, '<div class="col-' + width + '-' + colNumber + '"/>')
                        }
                        break;
                    }
                }

                var $cols = $(cols.html),
                    elsI = -1,
                    colsI = -1;

                $masonry.html($cols);
                $colActive = $cols.eq(0);

                while (++elsI < $els.length) {
                    colsI = -1;
                    while (++colsI < cols.length) {
                        if ($cols.eq(colsI).height() < $colActive.height()) {
                            $colActive = $cols.eq(colsI);
                        }
                    }
                    $colActive.append($els.eq(elsI));
                }
            };

        $(window).resize(init);
        init();
    };
})(jQuery);
