$("#scissors").on('click', function(){
  var result = compare('scissors', computerChoice());
  $("#decision").html(result);
});

$('#rock').on('click', function(){
  var result = compare('rock', computerChoice());
  $("#decision").html(result);
});

$('#paper').on('click', function(){
  var result = compare('paper', computerChoice());
  $("#decision").html(result);
});


var compare = function(me, opponent) {
  if(me === 'rock') {
    
      if(opponent === 'rock') {
          return 'Tie';
      } else if (opponent === 'paper') {
        return 'Lose! Rock loses to Paper';
      } else if (opponent === 'scissors') {
        return 'Win! Rock beats Scissors';
      }
    
  } else if (me === 'paper') {
    
      if(opponent === 'paper') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'Win! Paper beats Rock';
      } else if (opponent === 'scissors') {
        return 'Lose! Paper loses to Scissors';
    }
  } else if (me === 'scissors') {
    
      if(opponent === 'scissors') {
        return 'Tie';
      } else if (opponent === 'paper') {
        return 'Win! Scissors beats Paper';
      } else if (opponent === 'rock') {
        return 'Lose! Scissors loses to Rock';
    }
  } else {
    return "That doesn't make any sense!"
  }
};
var computerChoice = function() {
        var random = Math.random();
        if (random < 0.333) {
	      return  'rock';
        } else if(random < 0.67777) {
	      return 'paper';
        } else {
	      return 'scissors';
        } 
};