// JavaScript File
$(document).ready(function(){
    
    var genTrash = function(){
      var div = $("<div></div>");
      div.addClass('melon');
      div.addClass('trash');
      div.css({top: 200, left: 200, });
      $("#trashspace").append(div);
    };
    //var imgGenerator = Math.floor(Math.random() * 1000px);
    var genRandom = function(num){
      return Math.floor(Math.random()*num );
    };
    
    genTrash();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})

   