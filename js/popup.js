'use strict';

var url;
url = "http://www.pcworld.com/article/3157350/software-productivity/microsoft-launches-staffhub-to-connect-deskless-workers.html";

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        data: {'url': url },
        contentType: 'application/json',
        headers: {'X-API-Key': 'ikhUE9UOBiwUntWwxeijLowKJi1tJJNwBqQE4RdU'},
        url: 'https://mercury.postlight.com/parser',

        success: function(data) {
            console.log(data);
            $('#show-title').text(data.title);
            $('#show-site').attr('href', data.url);
            $('#show-data').append(data.content);
        }
    });
});