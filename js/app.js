function dataLoader() {
    var self = this;
    self.news = ko.observableArray([]);

    $.get("feed.xml", function(data) {
        var $xml = $(data);
        $xml.find("item").each(function() {
            var $this = $(this),
                item = {
                    title: $this.find("title").text(),
                    link: $this.find("link").text(),
                    description: $this.find("description").text(),
                    picture: $this.find("media\\:content, content").attr("url")
                }
            self.news.push(item);
        });
        return(self.news);
    });

    self.showPopup = function(item) {
        $.ajax({
            type: 'GET',
            data: {'url': item.link},
            contentType: 'application/json',
            headers: {'X-API-Key': 'ikhUE9UOBiwUntWwxeijLowKJi1tJJNwBqQE4RdU'},
            url: 'https://mercury.postlight.com/parser',

            success: function(data) {
                $('#show-title').text(data.title);
                $('#show-site').attr('href', data.url);
                $('#show-data').append(data.content);
                $('#enquirypopup').modal('show');
            }
        });
        console.log(item.link);
    }
}