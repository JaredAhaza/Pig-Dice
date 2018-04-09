var rolldice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function player(throwdice, actingscore, totalscore) {
  this.diceroll = throwdice
  this.actingscore = actingscore;
  this.totalscore = totalscore;
}
var firstplayer = new player(0, 0, 0);
var secondplayer = new player(0, 0, 0);
player.prototype.firstroll = function() {
  if (this.diceroll === 1) {
    this.actingscore = 0;
    alert(" Player Scored a 1, next player !")
  } else {
    this.actingscore += this.diceroll;
  }
}
player.prototype.hold = function() {
  this.totalscore += this.actingscore;
  this.actingscore = 0;
  alert(" Player has Held the game, next player turn ! ");
}
$(document).ready(function() {
  $("button#begin").click(function(event) {
    event.preventDefault();
    $(".playercontainer").show();
    $(".introduction").hide();
    var firstplayername = $("input#1stplayer").val();
    $("h2#1stplayer").text(firstplayername + " :");
    var secondplayername = $("input#2ndplayer").val();
    $("h2#2ndplayer").text(secondplayername + " :");
    $("button#1stplayer-roll").click(function(event) {
      firstplayer.diceroll = rolldice();

      $("#1stplayerroll").text(firstplayer.diceroll);
      firstplayer.firstroll();
      $("#1stplayerroundscore").text(firstplayer.actingscore);

      $("#totalscore1").text(firstplayer.totalscore);
    })
    $("button#1stplayer-hold").click(function(event) {
      firstplayer.hold();
      $("#totalscore1").text(firstplayer.totalscore);
    });
    $("button#2ndplayer-roll").click(function(event) {
      secondplayer.diceroll = rolldice();
      $("#2ndplayerroll").text(secondplayer.diceroll);
      secondplayer.firstroll();
      $("#2ndplayerroundscore").text(secondplayer.actingscore);

    })

    $("button#2ndplayer-hold").click(function(event) {
      secondplayer.hold();
      $("#totalscore2").text(secondplayer.totalscore);
    });
    $("button#newroll").click(function(event) {
      event.preventDefault();
      $(".playercontainer").hide();
      $("#1stplayer-roll").empty();
      $("#1stplayeroundscore").empty();
      $("#totalscore1").empty();
      $("#2ndplayerroll").empty();
      $("#2ndplayerroundscore").empty();
      $("#totalscore2").empty();
      $(".introduction").show();
    });

  });
});
