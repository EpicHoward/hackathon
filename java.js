// JavaScript File
$(document).ready(function() {
    var timeLimitSeconds = 30;
    var numImgs = 15;
    var maxTrash = 12;
    var spottedTrash = 5;
    var trashList = [];
    //Different sound files for when putting it in bin
    var bitingEffect = new Audio("./Sound/Biting-Apple.mp3");
    var paperEffect = new Audio("./Sound/paper.mp3");
    var plasticEffect = new Audio("./Sound/plastic.mp3");
    var landfillEffect = new Audio("./Sound/landfill.mp3");
    var breakingEffect = new Audio("./Sound/Breaking.mp3");
    //Recycle type of item(Glass,Compost, etc)
    var recycletype = "";
    //the jQuery Element so it can be deleted
    var trashItem = "";
    var score = 0;
    var livesLost=0;
    //Looks for html where score value goes
    var scoreElement = $("#scoreValue");

    for (x = 0; x < maxTrash; x++) {
        trashList.push(x % numImgs);
    }

    var recycleMap = {
        1: "glass",
        2: "compost",
        3: "paper",
        4: "plastic",
        5: "compost",
        6: "glass",
        7: "compost",
        8: "paper",
        9: "pastic",
        10: "landfill",
        11: "compost",
        12: "paper",
        13: "plastic",
        14: "landfill"


    };


    var startTime = new Date();
    var gameLoop = function() {
        var secondsPassed = Math.floor((new Date() - startTime) / 1000)
        if (secondsPassed > timeLimitSeconds) {
            youLose();
        }
        else {
            var visibleTrash = $(".trash").length;
            for (x = 0; x < spottedTrash - visibleTrash; x++) {
                genTrash();
            }
            $("#timer").html(timeLimitSeconds - secondsPassed);
        }
        if (score+livesLost == maxTrash) {
            youWin();
        }
    }
    setInterval(gameLoop, 500);

    var genTrash = function() {
        var trashIndex = genRandom(trashList.length);
        var trashNum = trashList[trashIndex] + 1;
        trashList.splice(trashIndex, 1);

        var div = $("<div></div>");
        div.addClass('trash');
        div.data("recycle-type", recycleMap[trashNum])
        div.css({
            top: genRandom(80) + "%",
            left: genRandom(80) + "%",
            "background-image": "url(./Images/" + trashNum + ".png)"
        });
        $("#trashspace").append(div);
    };
    //var imgGenerator = Math.floor(Math.random() * 1000px);
    var genRandom = function(num) {
        return Math.floor(Math.random() * num);
    };


    for (x = 0; x < spottedTrash; x++) {
        genTrash();
    }

    var loseLife = function() {
        var numLives = $(".life").length;
        $(".life").first().remove();
        console.log("lives" + numLives);
        livesLost++;
        if (numLives == 1) {
            youLose();

        }
    }

    var youLose = function() {
        window.location.href = "./youlose.html";
    }
    var youWin = function() {
        window.location.href = "./youwin.html";
    }











    //If a trash is clicked, defines the recy
    $(".trash").click(function(e) {

        recycletype = $(e.target).data("recycle-type");
        trashItem = $(e.target);
        console.log(recycletype);
    });

    $(".bins").click(function(e) {
        //console.log(e);
        var trashtype = e.target.dataset["recycletype"];
        console.log(trashtype);

        if (recycletype === "") {
            console.log("You aint do nuffin");
            //User Didn't click anything
            return;
        }
        else if (recycletype !== trashtype) {
            loseLife();
            trashPick(trashtype);
            console.log("bad");

        }
        else if (recycletype === trashtype) {
            trashPick(trashtype);
            score++;
            scoreElement.html(score);
            console.log("good");
        }


        //console
    });
    var trashPick = function(trashtype) {

        //Play sound effect
        if (trashtype === "plastic") {
            plasticEffect.play();
        }
        else if (trashtype === "paper") {
            paperEffect.play();
        }
        else if (trashtype === "compost") {
            bitingEffect.play();
        }
        else if (trashtype === "glass") {
            breakingEffect.play();
        }
        else if (trashtype === "landfill") {
            landfillEffect.play();
        }


        //Remove trash html
        trashItem.remove();

        //reset trash type
        recycletype = "";
        trashItem = "";
    }





















})
