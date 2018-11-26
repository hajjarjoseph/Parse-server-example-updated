

Parse.Cloud.define('opX', function(req, res) {
 
	

	
	var  totalCounter;
	var totalMoney = 80;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1);
	
	
	
	
	   
		userQuery.equalTo("CloudPassed",false);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   var userN = userData.get("username");
	   counter++
	   var gPriceArr = userData.get("GuardsPrices");
	   var gPrice = 0;

	   for (var i = 0; i < gPriceArr.length; i++) {
    	   gPrice += gPriceArr[i];
		   
    //Do something
}
	   
	      var gFwdArr = userData.get("ForwardsPrices");
	   var gFwd = 0;

	   for (var i = 0; i < gFwdArr.length; i++) {
    	   gFwd += gFwdArr[i];
		   
    //Do something
}
	   
	      var gCenterArr = userData.get("CentersPrices");
	   var gCenter = 0;

	   for (var i = 0; i < gCenterArr.length; i++) {
    	   gCenter += gCenterArr[i];
		   
    //Do something
}
	   
	   totalMoney = totalMoney - (gPrice + gFwd + gCenter);
	   
	   totalMoney = Math.round(totalMoney * 100) / 100
	   
	   
    userData.set("Money",totalMoney);
    userData.set("CloudPassed",true);
    userData.save(null, { useMasterKey: true });
    
     
   }
	    totalCounter = counter;
	  
	  console.log(totalCounter);
	  console.log(userN);
	  
    res.success(counter);
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('daConfirm', function(req, res) {
 
	 var myArray = new Array(50).fill(0);
	myArray[0] = 1;
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,myArray);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});
	


Parse.Cloud.define('resetMoney', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo("Money",80);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set("Money",80);
    userData.save(null, { useMasterKey: true });
    
     
   }
	    totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});
	  
	  
Parse.Cloud.define('automaticConfirmationTrue', function(req, res) {
  var currentRound = req.params.currentRound
  var previousRound = req.params.previousRound
  
  
   var userQuery = new Parse.Query('_User');
	userQuery.limit(1);
	userQuery.equalTo('CloudPassed',true);
   
 
  
 
   userQuery.find({
  success: function(results) {
 
  
   var totalScore = 0;
	  var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
	     counter ++;
	
	  var statUser = userData.get('username');
	  var nameQuery = new Parse.Query('_User');
		nameQuery.equalTo('username',statUser);
	   
		nameQuery.find({
  success: function(resultsUser) {
	   var previousRoundPlayer = userData.get(previousRound);
    var currentRoundPlayers =  userData.get(currentRound);
    
    console.log(previousRoundPlayer[0] + 'WA7eCHHHHHH' + 'and user ' + statUser );
	  
	   
	    userData.set('CloudPassed',true);
	   
	 
    if(currentRoundPlayers.length === 0){
	    
	      if(previousRoundPlayer.length === 0){
		      userData.save(null, { useMasterKey: true });
		   
	   }else if(previousRoundPlayer.length >5){
		   for(var h = 0;  h< previousRoundPlayer.length; h++){
			currentRoundPlayers[h] = previousRoundPlayer[h];
		   }
		   
		   userData.set('CloudPassed',true);
		   userData.set(currentRound,currentRoundPlayers);
       		  userData.save(null, { useMasterKey: true }); 
		    
		    }else{
		  userData.set('CloudPassed',true);
	   	  userData.set(currentRound,previousRoundPlayer);
       		  userData.save(null, { useMasterKey: true });
	   }
	    
	    
		
    
    }else{
		console.log("No need to copy");
	        userData.save(null, { useMasterKey: true });
	}
  },
  
  error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
	  
   
    
    
     
   }
	  
	   res.success(counter);
   
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
  
  
});
	  


Parse.Cloud.define('daFiftyNormal', function(req, res) {
 
	 var myArray = new Array(50).fill(0);
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,myArray);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('daFifty', function(req, res) {
 
	 var myArray = new Array(50).fill(0);
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetArray', function(req, res) {
 
	 var myArray = new Array();
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('computeScoreRoundTrue', function(req, res) {
  var currentRoundPlayer = req.params.currentRoundPlayer
  var currentRound = req.params.currentRound
  var currentNumber = req.params.currentNumber
  

  
 
  
  var totalScoreRound =0;

 
  var userQuery = new Parse.Query('_User');

	userQuery.limit(1);
 
	userQuery.equalTo('CloudPassed',true);
  
  
  userQuery.find().then(
  function(results) {
 
	   var counter = 0;
  
   for (var z = 0; z < results.length; z++) {
  
	  
	  
    var userData = results[z];
	   counter++;
	   
 
	   var statUser = userData.get('username');
	   
	    var nameQuery = new Parse.Query('_User');
		nameQuery.equalTo('username',statUser);
	   
		nameQuery.find({
  success: function(resultsUser) {
			  var userDataUser = resultsUser[0];
	  console.log('User Is  ' + statUser);
			   var bonusStateArray = userDataUser.get('BonusEachRound');
			    var bonusThisRound = bonusStateArray[currentNumber];
   var historyRounds = userData.get('HistoryRoundScore');
 	   userDataUser.set('CloudPassed',true);
	   
	   
	    if (bonusThisRound === 0 || bonusThisRound === 5){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	  
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
    totalScore = totalScore + playerScore;
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   } else  if (bonusThisRound === 1){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		   
		    historyRounds[currentNumber] = 0;
                    userDataUser.set('LastScore',0);
		  
                    userDataUser.set('HistoryRoundScore',historyRounds);
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	  
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
	if(playerScore < 0){
		playerScore = playerScore * -1;
	}
    totalScore = totalScore + playerScore;
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }else  if (bonusThisRound === 2){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	  
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
	
	if(namePlayer === playersInThisRound[1]){
        playerScore = playerScore * 1.2;
	    
    }
	
	
	
    totalScore = totalScore + playerScore;
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }else  if (bonusThisRound === 3){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	 var maxScore = 0;
	 var maxCounter = 0;
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
	
	
	
	if (namePlayer === playersInThisRound[0] || namePlayer === playersInThisRound[1] || namePlayer === playersInThisRound[2] || namePlayer === playersInThisRound[3] || namePlayer === playersInThisRound[4]){
		  if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
	
	
	
	
	
    totalScore = totalScore + playerScore;
	}else{
		maxCounter = maxCounter + 1;
		if(maxScore < playerScore){
			maxScore = playerScore;
		}
		
		if(maxCounter === 3){
			 totalScore = totalScore + maxScore;
		}
		
		
	}
	
  
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }else  if (bonusThisRound === 4){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	 var maxScore = 0;
	 var maxCounter = 0;
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
	
	
	
	
		
        playerScore = playerScore * 1.2;
	    
    
	
	
	
	
	
    totalScore = totalScore + playerScore;
	
  
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }
	   
	  
		},

  error: function(error) {
    // error is an instance of Parse.Error.
		}
		});
	   
	   
	  
  
   
  
   
     
  

 
   }
  
     
   
	   res.success(counter);  
  
  },
	  
	  

   function(error) {
    // error is an instance of Parse.Error.
  }); 
});


Parse.Cloud.define('resetArrayNormal', function(req, res) {
 
	 var myArray = new Array();
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,myArray);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetString', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,'');
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('resetStringNormal', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,'');
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,'');
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('resetNumberNormal', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,0);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetNumber', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetNumberNormalPlayer', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('Player');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,0);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetNumberPlayer', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('Player');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});






Parse.Cloud.define('resetConf', function(req, res) {
 
	 var myArray = new Array();
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,'');
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,'');
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});



Parse.Cloud.define('resetOther', function(req, res) {
 
	 var myArray = new Array();
	
	
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo("Money",80);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set("Money",80);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
		
	
	
	
	
	
	
	
 
});

Parse.Cloud.define('cloudPass', function(req, res) {
  var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	userQuery.notEqualTo('CloudPassed',false);
	
	
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    userData.set('CloudPassed',false);
    userData.save(null, { useMasterKey: true });
	   counter++;
    
     
   }
    res.success('I passed on '+counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	
 
});


Parse.Cloud.define('bonusGiveAway', function(req, res) {
var currentRound = req.params.currRound;
var bonusType = req.params.bonusType;
	bonusType = parseInt(bonusType);
	
  var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	userQuery.notEqualTo('CloudPassed',true);

	
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    var confirmRound = userData.get("BonusEachRound");
    confirmRound[currentRound] = bonusType;
    userData.set('CloudPassed',true);
    userData.save(null, { useMasterKey: true });
	   counter++;
    
     
   }
    res.success('I passed on '+counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	
 
});


Parse.Cloud.define('suka', function(req, res) {
  var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	userQuery.notEqualTo('CloudPassed',true);
	
	
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    var theConfirmRound = userData.get('ConfirmRound');
    var round1Players = userData.get('Round1Players');
    var round2Players = userData.get('Round2Players');	
    if(round1Players.length === 0){
    	theConfirmRound[0] = 0;	
    }
    if(round2Players.length > 0){
    	theConfirmRound[1] = 1;	
    } 		   
	   
    userData.set('CloudPassed',true);
    userData.set('ConfirmRound',theConfirmRound); 	   
    userData.save(null, { useMasterKey: true });
	   counter++;
    
     
   }
    res.success('I passed on '+counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	
 
});



Parse.Cloud.define('scoretotal', function(req, res) {
 
	var totalEff = 0;
	
	var query = new Parse.Query(Parse.Installation);


	
	 var userQuery = new Parse.Query('Player');
	
	userQuery.limit(1000);
		 userQuery.find({
  success: function(results) {
 
  
 
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    totalEff += userData.get('Average_Efficiency');
    
     
   }
	  
	   var totaleffi = new Parse.Query('TotalEfficiency');
	  	 totaleffi.find({
  success: function(results) {
 
  
 
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    userData.set('totalEfficiency',totalEff);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
  res.success('Hiya');
});

Parse.Cloud.define('postStatUser', function(req, res) {
   var currentUser = req.params.currentUser
   
   
     
   var userQuery = new Parse.Query('_User');
	
	
   userQuery.equalTo('username',currentUser);
	
	 userQuery.find({
  success: function(results) {
 
  
 
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    userData.set("StatUser",currentUser);
    userData.save(null, { useMasterKey: true });
    
     
   }
   
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	

   
});



Parse.Cloud.define('automaticConfirmation', function(req, res) {
  var currentRound = req.params.currentRound
  var previousRound = req.params.previousRound
  
  
   var userQuery = new Parse.Query('_User');
	userQuery.limit(1);
	userQuery.equalTo('CloudPassed',false);
   
 
  
 
   userQuery.find({
  success: function(results) {
 
  
   var totalScore = 0;
	  var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
	     counter ++;
	
	  var statUser = userData.get('username');
	  var nameQuery = new Parse.Query('_User');
		nameQuery.equalTo('username',statUser);
	   
		nameQuery.find({
  success: function(resultsUser) {
	   var previousRoundPlayer = userData.get(previousRound);
    var currentRoundPlayers =  userData.get(currentRound);
    
    console.log(previousRoundPlayer[0] + 'WA7eCHHHHHH' + 'and user ' + statUser );
	  
	   
	    userData.set('CloudPassed',true);
	   
	 
    if(currentRoundPlayers.length === 0){
	    
	      if(previousRoundPlayer.length === 0){
		      userData.save(null, { useMasterKey: true });
		   
	   }else if(previousRoundPlayer.length >5){
		   for(var h = 0;  h< previousRoundPlayer.length; h++){
			currentRoundPlayers[h] = previousRoundPlayer[h];
		   }
		   
		   userData.set('CloudPassed',true);
		   userData.set(currentRound,currentRoundPlayers);
       		  userData.save(null, { useMasterKey: true }); 
		    
		    }else{
		  userData.set('CloudPassed',true);
	   	  userData.set(currentRound,previousRoundPlayer);
       		  userData.save(null, { useMasterKey: true });
	   }
	    
	    
		
    
    }else{
		console.log("No need to copy");
	        userData.save(null, { useMasterKey: true });
	}
  },
  
  error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
	  
   
    
    
     
   }
	  
	   res.success(counter);
   
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
  
  
});




Parse.Cloud.define('computeScoreRound', function(req, res) {
  var currentRoundPlayer = req.params.currentRoundPlayer
  var currentRound = req.params.currentRound
  var currentNumber = req.params.currentNumber
  

  
 
  
  var totalScoreRound =0;

 
  var userQuery = new Parse.Query('_User');

	userQuery.limit(1);
 
	userQuery.equalTo('CloudPassed',false);
	
  
  
  userQuery.find().then(
  function(results) {
 
	   var counter = 0;
  
   for (var z = 0; z < results.length; z++) {
  
	  
	  
    var userData = results[z];
	   counter++;
	   
 
	   var statUser = userData.get('username');
	   
	    var nameQuery = new Parse.Query('_User');
		nameQuery.equalTo('username',statUser);
	   
		nameQuery.find({
  success: function(resultsUser) {
			  var userDataUser = resultsUser[0];
	  console.log('User Is  ' + statUser);
			   var bonusStateArray = userDataUser.get('BonusEachRound');
			    var bonusThisRound = bonusStateArray[currentNumber];
   var historyRounds = userData.get('HistoryRoundScore');
 	   userDataUser.set('CloudPassed',true);
	   
	   
	    if (bonusThisRound === 0 || bonusThisRound === 5){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		   
		    historyRounds[currentNumber] = 0;
                    userDataUser.set('LastScore',0);
		  
                    userDataUser.set('HistoryRoundScore',historyRounds);
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	  
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
    totalScore = totalScore + playerScore;
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   } else  if (bonusThisRound === 1){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	  
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
	if(playerScore < 0){
		playerScore = playerScore * -1;
	}
    totalScore = totalScore + playerScore;
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }else  if (bonusThisRound === 2){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	  
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
	
	if(namePlayer === playersInThisRound[1]){
        playerScore = playerScore * 1.2;
	    
    }
	
	
	
    totalScore = totalScore + playerScore;
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }else  if (bonusThisRound === 3){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	 var maxScore = 0;
	 var maxCounter = 0;
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
	
	
	
	if (namePlayer === playersInThisRound[0] || namePlayer === playersInThisRound[1] || namePlayer === playersInThisRound[2] || namePlayer === playersInThisRound[3] || namePlayer === playersInThisRound[4]){
		  if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
	    
    }
	
	
	
	
	
    totalScore = totalScore + playerScore;
	}else{
		maxCounter = maxCounter + 1;
		if(maxScore < playerScore){
			maxScore = playerScore;
		}
		
		if(maxCounter === 3){
			 totalScore = totalScore + maxScore;
		}
		
		
	}
	
  
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }else  if (bonusThisRound === 4){
    
    
    var playersInThisRound = userDataUser.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    
		    userDataUser.save(null, { useMasterKey: true });
	   }else{
	
 var confirmationRounds = userDataUser.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
  
	console.log(playersInThisRound.length);
		   
	
		queryPlayer.containedIn('Name',playersInThisRound);
		
	   
		
		queryPlayer.find({
  success: function(results2) {
 
   var totalScore = totalScoreRound;
	 var maxScore = 0;
	 var maxCounter = 0;
   for (var i = 0; i < results2.length; i++) {
  
    var userData2 = results2[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
	
	
	
	
		
        playerScore = playerScore * 1.2;
	    
    
	
	
	
	
	
    totalScore = totalScore + playerScore;
	
  
	   console.log('Tout est possible' + totalScore);
    
	    console.log('player Is ' + namePlayer + ' and score is ' + playerScore);
    
		
	 
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  
	  
	   	    console.log('Ok boys its ' + totalScoreRound);
	    if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userDataUser.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userDataUser.set('TotalScore',parsetotalScore);
      userDataUser.set('HistoryRoundScore',historyRounds);
	  
	  
      
       
	  
	    
   
     userDataUser.save(null, { useMasterKey: true });   
 
	
  
  },
	    
	    

   error: function(error) {
    // error is an instance of Parse.Error.
  }
		});
		
	
		   
	 
		
		   
    
     
      
  
	   }
	   
	
    
   }
	   
	  
		},

  error: function(error) {
    // error is an instance of Parse.Error.
		}
		});
	   
	   
	  
  
   
  
   
     
  

 
   }
  
     
   
	   res.success(counter);  
  
  },
	  
	  

   function(error) {
    // error is an instance of Parse.Error.
  }); 
});




