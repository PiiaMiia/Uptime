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
                    pubDate: $this.find("pubDate").text(),
                    author: $this.find("author").text(),
                    picture: $this.find("media\\:content, content").attr("url")
                }
            self.news.push(item);
        });
    });
}

function webParser() {
    var link = this;
    link.news = ko.observableArray([]);

    $.ajaxSetup({
        headers: { "x-api-key": "ikhUE9UOBiwUntWwxeijLowKJi1tJJNwBqQE4RdU" }
    });

    $.get("https://mercury.postlight.com/parser?url=https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed", function(data) {} );
}

nsole.log(ko.observableArray([]));