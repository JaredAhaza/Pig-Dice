var rolldice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function player(throwdice, actingscore, totalscore) {
  this.diceroll =throwdice
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
              firstplayer.throw = rolldice();
              
              $("#1stplayer-hold").text(firstplayer.roll);
              firstplayer.roll = rolldice();
              $("#roundtotal1").text(firstplayer.actingscore);
            })
            $("button#2ndplayerroll").click(function(event) {
              secondplayer.roll = rollwdice();
              $("#die-roll-2").text(playerName2.roll);
              secondplayer.rollone();
              $("#roundtotal2").text(secondplayer.actingscore);
            })
            $("button#1stplayer-hold").click(function(event){
          firstplayer.hold();

        });
  });
});
