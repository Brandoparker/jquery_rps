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
        return 'Your rock lost to paper';
      } else if (opponent === 'scissors') {
        return 'Your rock beat scissors';
      }
    
  } else if (me === 'paper') {
    
      if(opponent === 'paper') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'Your paper beat rock';
      } else if (opponent === 'scissors') {
        return 'Your paper lost to scissors';
    }
  } else if (me === 'scissors') {
    
      if(opponent === 'scissors') {
        return 'Tie';
      } else if (opponent === 'paper') {
        return 'Your scissors beat paper';
      } else if (opponent === 'rock') {
        return 'Your scissors lost to Rock';
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