/**
 * bootstrap.masonry.js - Masonry Bootstrap (https://github.com/gustavoconci/bootstrap.masonry.js)
 * Copyright (c) 2017-2018, Gustavo Henrique Conci. (MIT Licensed)
 */

(function($) {
    function media(feature) {
        return typeof window.matchMedia === 'undefined' || window.matchMedia(feature).matches;
    }

    $.fn.masonry = function() {
        var $masonry = $(this),
            mediaCurrent = 0,
            $els = $masonry.find($masonry.attr('data-target')),
            $cols = [],

            add = function($els) {
                var $colActive = $cols.eq(0),
                    elsI = -1,
                    colsI;

                while (++elsI < $els.length) {
                    colsI = -1;

                    while (++colsI < $cols.length) {
                        if ($cols.eq(colsI).height() >= $colActive.height()) {
                            continue;
                        }

                        $colActive = $cols.eq(colsI);
                    }

                    $colActive.append($els.eq(elsI));
                }
            },

            push = function($news) {
                $els = $els.add($news);

                add($news);
            },

            init = function() {
                var repeat = function(num, text) {
                        return new Array(Math.ceil(num)+1).join(text);
                    },
                    data = $masonry.data(),
                    widths = { 'lg': 1200, 'md': 992, 'sm': 768, 'xs': 0 },
                    colsHtml = '',
                    mediaNew = 0;

                for (var index in data) {
                    if (index.indexOf('col') < 0) continue;

                    var width = index.replace('col', '').toLowerCase();
                    mediaNew = widths[width];

                    if (media('(min-width: ' + mediaNew + 'px)')) {
                        var colNumber = data[index];
                        colsHtml = repeat((12 / colNumber), '<div class="col-' + width + '-' + colNumber + '"/>');

                        break;
                    }
                }

                if (mediaNew != mediaCurrent) {
                    mediaCurrent = mediaNew;

                    $cols = $(colsHtml);
                    $masonry.html($cols);

                    add($els);
                }
            };

        $(window).resize(init);
        init();

        return { push: push };
    };
})(jQuery);
