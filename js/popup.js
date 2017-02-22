'use strict';

var url;
url = "http://www.postimees.ee/4023333/ivanova-lasnamaee-esinumbri-kohast-ilma-jaeetud-savisaar-ei-pruugi-valimistel-ueldse-osaleda";

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