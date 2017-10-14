var startRandomnumber = 0;
var crystalRandomnumber = 0;
var totalScore = 0;
var winCount = 0;
var loseCount = 0;


$(document).ready()

function generateGameRandomNumber(){

var min = 19;
var max = 120;
var random = Math.floor(Math.random() * (max - min + 1)) + min;   
	return(random);
}
	startRandomnumber = generateGameRandomNumber();
	
		$(".RandomNumberBox").text(startRandomnumber);


	var values = [
    Math.floor(Math.random()*12) + 1,
    Math.floor(Math.random()*12) + 1,
    Math.floor(Math.random()*12) + 1,
    Math.floor(Math.random()*12) + 1
]

$(".crystals").on("click", function(e) {
    	value = values[parseInt($(this).attr("id"))]
    console.log("VALUE" ,value);
    	totalScore +=value;
    console.log("TOTAL",totalScore);
    $(".Scorebox").text(totalScore);
    if
    (totalScore === startRandomnumber){
    	++winCount;
    	console.log("WIN",winCount);
    }
    	else{
    		if(totalScore > startRandomnumber)
    			++loseCount;
    		   console.log("LOSE", loseCount);
    	}
    });
    
   

