$(document).ready(function(){

  // $('#raceTrack').css('height','300');
  $('#race').keydown(function(event){

    // find a way to only listen to keydown for 'Q' and 'P'
    // 'Q' key is 81
    // 'P' key is 80
    // event.which to find out the key code
    // specifiying a key for each car(let say this is car1)
    if(event.which === 81){
      console.log("clicked 81");

    }
    //specifiyin a key for cars(let say this is car2)
    if(event.which === 80){
      console.log("clicked 80");


    }


  });




});
