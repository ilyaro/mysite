$(function(){
    var _href = location.pathname.split('/')[1];
    var _url = location.pathname.split('/');
    var _length = _url.length;
    var _page = _url[_length - 1] + "";
    var _current = _page.split('.')[0];
    _current = parseInt(_current);
    $('a.next').click(function(){
        var request = location.protocol + '//' + location.hostname + '/' + _href + "/" + (_current + 1) + '.html';
        $.ajax({
            url: request,
            type:'HEAD',
            error: function()
            {
               // last page
            },
            success: function()
            {
                window.location = request;
            }
        });
    });

    $('a.prev').click(function(){
        var request = location.protocol + '//' + location.hostname + '/' + _href + "/" + (_current - 1) + '.html';
        $.ajax({
            url: request,
            type:'HEAD',
            error: function()
            {
               // last page
            },
            success: function()
            {
                window.location = request;
            }
        });

    });

});