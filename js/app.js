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