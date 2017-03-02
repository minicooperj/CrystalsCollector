	var wins = 0;

	var losses = 0;

	var currentScore = 0;
	var targetScore = 0;

	var vals = generateVals();
	var targetScore = vals.targetScore;
	var redVal = vals.redVal;
	var blueVal = vals.blueVal;
	var yellowVal = vals.yellowVal;
	var purpleVal = vals.purpleVal;

	function generateVals() {

		 targetScore = Math.floor((Math.random() * 102) + 19);
		$("#number-box").html(targetScore);

		 redVal = Math.floor((Math.random() * 12) + 1);
		 blueVal = Math.floor((Math.random() * 12) + 1);
		 yellowVal = Math.floor((Math.random() * 12) + 1);
		 purpleVal = Math.floor((Math.random() * 12) + 1);

			return {
			targetScore: targetScore,
			redVal: redVal,
			blueVal: blueVal,
			yellowVal: yellowVal,
			purpleVal: purpleVal
					};
							};

	function scoreCheck() {
		if (currentScore === targetScore) {
			wins = wins + 1;
			$("#wins-num").html("Wins: " + wins);
			alert("U win");
			currentScore = 0;
			reset();
			
			
											}

		else if (currentScore >= targetScore) {
			losses = losses + 1;
			$("#losses-num").html("Losses: " + losses);
			alert("U lose");
			currentScore = 0;
			reset();
			
												}
							}

	function reset() {
		confirm("Press OK to reset");
		$("#total-score-box-text").html("Your total score is " + currentScore);
		generateVals();

	}

 $("#red-crystal").click(function() {

 	currentScore = currentScore + redVal;
 	$("#total-score-box-text").html("Your total score is " + currentScore);
 	scoreCheck();
 });

 $("#blue-crystal").click(function() {

 	currentScore = currentScore + blueVal;
 	$("#total-score-box-text").html("Your total score is " + currentScore);
 	scoreCheck();
 });

 $("#yellow-crystal").click(function() {

 	currentScore = currentScore + yellowVal;
 	$("#total-score-box-text").html("Your total score is " + currentScore);
 	scoreCheck();
 });

 $("#purple-crystal").click(function() {

 	currentScore = currentScore + purpleVal;
 	$("#total-score-box-text").html("Your total score is " + currentScore);
 	scoreCheck();
 });


	// generateVals();
	// console.log(targetScore);
	// console.log(currentScore);