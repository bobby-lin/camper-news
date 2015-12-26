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
            console.log(obj);
            html = "<li class='item'>" + image + "<a href=\"" + link + "\" target=\"_blank\"><span class='item-text'>" 
                + headline + "<p>" + upVote + "</p></span></a></li>";
            $("#list").append(html);
        });
    });
});
