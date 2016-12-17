// JavaScript File
$(document).ready(function() {
    var timeLimitSeconds = 30;
    var startTime = new Date();
    var gameLoop = function() {
        var secondsPassed =Math.floor((new Date()-startTime)/1000)
        if (secondsPassed>timeLimitSeconds){
    
        }
        else {
            $("#timer").html(timeLimitSeconds-secondsPassed);
        }
    }
    setInterval(gameLoop,500);

    var genTrash = function() {
        var div = $("<div></div>");
        div.addClass('melon');
        div.addClass('trash');
        div.css({
            top: genRandom(80) + "%",
            left: genRandom(80) + "%",
        });
        $("#trashspace").append(div);
    };
    //var imgGenerator = Math.floor(Math.random() * 1000px);
    var genRandom = function(num) {
        return Math.floor(Math.random() * num);
    };

    genTrash();
    for (x = 0; x < 7; x++) {
        genTrash();
    }

    var loseLife = function() {
        var numLives = $(".life").length;
        $(".life").first().remove();
        if (numLives = 0) {
            //gameover
        }
    }




















})
