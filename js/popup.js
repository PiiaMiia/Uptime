'use strict';

var url;
url = "https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed";

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        data: {'url': url },
        contentType: 'application/json',
        headers: {'X-API-Key': 'ikhUE9UOBiwUntWwxeijLowKJi1tJJNwBqQE4RdU'},
        url: 'https://mercury.postlight.com/parser',

        success: function(data){
            $('#show-title').text(data.title);
            $('#show-site').attr('href', data.url);
            $('#show-data').append(data.content);
        }
    });
});