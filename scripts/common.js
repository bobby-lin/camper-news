/**
 * Created on: 26/12/15
 *     Author: Bobby Lin
 */


$(document).ready(function(){
    var url = "http://www.freecodecamp.com/news/hot";
    $.getJSON(url, function(json){
        var html = "";
        json.forEach(function(obj){
            var headline = obj.headline;
            var upVote = obj.upVotes.length;
            if(upVote < 10) {
                upVote = upVote + " Points";
            }
            else{
                upVote = upVote + " Points";
            }
            var link = obj.link;
            var image = obj.image;
            if(image === "") {
                image = "<img class=\"image\" src=\"" + obj.author.picture +"\" style='width: 50px; height:50px'>";
            }
            else {
                image = "<img class=\"image\" src=\"" + obj.image +"\" style='width: 50px; height:50px'>";
            }
            html = "<li class='item'>" + image + "<a class='item-text' href=\"" + link + "\" target=\"_blank\">" +
                "<span class=' name item-text'>" 
                + headline + "<p>" + upVote + "</p></span></a></li>";
            $("ul").append(html);
        });
        var from = 0, step = 10;

        function showNext(list) {
            if((from+step)>=100){
                return;
            }
            list.find('li').hide().end()
                .find('li:lt(' + (from + step) + '):not(li:lt(' + from + '))')
                .show();
            from += step;
        }

        function showPrevious(list) {
            if((from-step)<=0){
                return;
            }
            from -= step;
            list.find('li').hide().end()
                .find('li:lt(' + from + '):not(li:lt(' + (from - step) + '))')
                .show();
        }
        
        $('#next').click(function(e) {
            e.preventDefault();
            showNext($('ul'));
        });

        $('#previous').click(function(e) {
            e.preventDefault();
            showPrevious($('ul'));
        });

        showNext($('ul'));
    });
});
