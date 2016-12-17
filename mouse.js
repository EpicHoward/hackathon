$(document).ready(function(){
    var recycletype = "";
    var recyclemap = {
        1: "glass",
        2: "reindeer",
        3: "paper",
        4: "plastic",
        5: "compost",
        6: "glass",
        7: "reindeer",
        8: "paper",
        9: "pastic",
        10: "landfill",
        11: "reindeer",
        12: "paper",
        13: "plastic",
        14: "landfill"
        
        
    };
    
    
    
    
    $(".trash").click(function (e){
        console.log(e);
        //recycletype = "compost";
        //console.log(e);
    });
    
    $(".bins").click(function (e){
        var trashtype = recyclemap["5"];
        
        if (recycletype === "") {
            console.log("You aint do nuffin");
            //User Didn't click anything
            return;
        }else if(recycletype !== trashtype){
            //loseLife();
            console.log("bad")
            
            
        }else if(recycletype === trashtype){
            //getPoint();
            console.log("good");
        }
        //console
    });
    
    
})