/**
 * bootstrap.masonry.js - Masonry Bootstrap (https://github.com/gustavoconci/bootstrap.masonry.js)
 * Copyright (c) 2017-2020, Gustavo Henrique Conci. (MIT Licensed)
 */
(function($) {
    function media(feature) {
        return typeof window.matchMedia === 'undefined' || window.matchMedia(feature).matches;
    }

    $.fn.masonry = function() {
        var $masonry = $(this),
            mediaCurrent = 0,
            target = $masonry.attr('data-target'),
            $els = $masonry.find(target),
            $cols = [],

            add = function($els) {
                var $colActive = $cols.eq(0),
                    elsI = -1,
                    colsI,
                    $col;

                while (++elsI < $els.length) {
                    colsI = -1;

                    $colActive = $cols.eq(0);

                    while (++colsI < $cols.length) {
                        $col = $cols.eq(colsI);
                        $col.data('childHeight', 0).find(target).each(function() {
                            $col.data('childHeight', $col.data('childHeight') + $(this).outerHeight(true));
                        });

                        if ($col.data('childHeight') >= $colActive.data('childHeight')) {
                            continue;
                        }

                        $colActive = $col;
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
                    widths = { 'xl': 1200, 'lg': 992, 'md': 768, 'sm': 576, 'xs': 0 },
                    colsHtml = '',
                    mediaNew = 0;

                for (var index in data) {
                    if (index.indexOf('col') < 0) continue;

                    var width = index.replace('col', '').toLowerCase();
                    mediaNew = widths[width];

                    if (media('(min-width: ' + mediaNew + 'px)')) {
                        var colNumber = data[index];
                        colsHtml = repeat((12 / colNumber), '<div class="col"/>');

                        break;
                    }
                }

                if (mediaNew != mediaCurrent) {
                    mediaCurrent = mediaNew;
                }

                $cols = $(colsHtml);
                $masonry.html($cols);

                add($els);
            };

        $(window).resize(init);
        init();

        return { push: push };
    };
})(jQuery);
