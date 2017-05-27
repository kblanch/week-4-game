var randomNum = randomNumber(19,120);
  		var winsCount = 0;
  		var lossesCount = 0;
  		var totalScore = 0;
  		var c1Value = randomNumber(1,12);
  		var c2Value = randomNumber(1,12);
  		var c3Value = randomNumber(1,12);
  		var c4Value = randomNumber(1,12);

  		$("#random-num").html(randomNum);
  		$("#wins").html(winsCount);
  		$("#losses").html(lossesCount);
  		$("#total-score").html(totalScore);

  		$(document).on("click","#crystal-1",function(){
  			// console.log("hello");
  			totalScore += c1Value;
  			$("#total-score").html(totalScore);
  			checkResult();

  		});

  		$(document).on("click","#crystal-2",function(){
  			// console.log("hello");
  			totalScore += c2Value;
  			$("#total-score").html(totalScore);
  			checkResult();

  		});

  		$(document).on("click","#crystal-3",function(){
  			// console.log("hello");
  			totalScore += c3Value;
  			$("#total-score").html(totalScore);
  			checkResult();

  		});

  		$(document).on("click","#crystal-4",function(){
  			// console.log("hello");
  			totalScore += c4Value;
  			$("#total-score").html(totalScore);
  			checkResult();

  		});



  		function randomNumber(min,max){
  			return Math.floor(Math.random() * (max - min + 1)) + min;
  		}

  		function checkResult(){
	  		if(totalScore > randomNum){
	  			// console.log("Lose!");
	  			lossesCount++;
	  			$("#losses").html(lossesCount);
	  			newGame();
	  		}
	  		if(totalScore === randomNum){
	  			// console.log("Win!");
	  			winsCount++;
	  			$("#wins").html(winsCount);
	  			newGame();
	  		}
  		}

  		function newGame() {
	  		randomNum = randomNumber(19,120);
	  		totalScore = 0;
	  		c1Value = randomNumber(1,12);
	  		c2Value = randomNumber(1,12);
	  		c3Value = randomNumber(1,12);
	  		c4Value = randomNumber(1,12);

	  		$("#random-num").html(randomNum);
	  		$("#wins").html(winsCount);
	  		$("#losses").html(lossesCount);
	  		$("#total-score").html(totalScore);
  		}