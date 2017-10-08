
var speed1 = 0;
var speed2 = 0;
var winner = false;

$(document).ready(function() {

  // $('#raceTrack').css('height','300');
  $('#race').keydown(function(event) {
    if(winner === false){
        // find a way to only listen to keydown for 'Q' and 'P'
        // 'Q' key is 81
        // 'P' key is 80
        // event.which to find out the key code
        // specifiying a key for each car(let say this is car1)
        if(event.which === 81) {

          //now we need to set up who could be a winner
          if(speed1 === 300) {
            alert("winner is car 1");
            winner = true;

          }else{
            //no one wins? keep driving
            console.log("clicked 81");
            $('#raceTrack1').css('margin-left', speed1);
            speed1 += 10;
          }
        }
        //specifiyin a key for cars(let say this is car2)
        if(event.which === 80) {
          //now we need to set up who could be a winner2
          if(speed2 === 300) {
            alert("the winner is car2");
            winner = true;
            // no one wins? keep driving
          }else{
            console.log("clicked 80");
            $("#raceTrack2").css('margin-left', speed2);
            speed2 += 10;

          }

        }



    } else{
      // if there is winner do nothing
    }


    //  next, our step could be:
    //1 where the car can stop so it doesnt disappear
    //3 store the score
    //2 create reset button
    //oraintation



  });




});
