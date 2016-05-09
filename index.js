$(init);

function init(){




//////////////////initial healther

  
  var player1Health = 100;
  var player2Health = 100;
  var time = 500;
  var counter = 1;
  var turn = true;




  $("#start").on('click', function(e){
    
    runMyGame();
    
});




function runMyGame(){
  slideUp();
  $(window).on('keydown', function(e){
    switch(e.which){
          case 65 : player2Attack();
          break;
          case 76 : player1Attack();
          break;
          default : console.log('Broken Switch');
          break;
    }
      knockOut();

  });




  // if (turn === true) {
  //   player2Attack();
  // } else {
  //   player1Attack();
  // }
  }

//slider working! 


  function knockOut() {

    if (parseInt($("#player1Health").html()) <= 0 ){
      console.log("player 2 wins")
      $(window).off('keydown');
    }
    else if (parseInt($("#player2Health").html()) <= 0) {
      console.log("player 1 wins");
      $(window).off('keydown');
    }

  }


 function slideUp() {

    $( "#slide" ).animate({ value: 125 }, time , slideDown);

 }


 function slideDown() {

    $( "#slide" ).animate({ value: -125 }, time , slideUp);

 }


    // if ($("#counter") % 2 === 0)  { player2Attack()};

    //   else  ($("#counter") % 2 === 1) { player2Attack()};


// player 2 attack 

 


function player2Attack() {

 // $(window).keydown(function(e){

  if (turn === true){

  var power = $("#slide").val();
    // $("#slide").stop(true);

    console.log($("#slide").val());

      //make negative power positive.
      if (power < 0){

        power = -power; 
      };

      //dictate how powerful a hit is. 
      if (power <10 ){
       power = 10;
     }

     else if (power < 50){
      power = 5;
    } 

    else {
      power = 2;
    }

    player1Health = player1Health - power;
    counter = counter + 1;
    console.log(counter);

    console.log(player1Health);

    $("#player1Health").html(player1Health);

    // $("#counter").html(counter);
    turn = false;
    // console.log(turn);

    // runMyGame();

  // });
}
else {
  console.log("NOT PLAYER 2 TURN");
}


}



// // player 1 attack  $(window).keydown(function(e){


  function player1Attack() {
    // $(window).keydown(function(e){

      if (turn === false){

      // var counter = counter + 1;
      // console.log(counter);
      
      var power = $("#slide").val();
    // $("#slide").stop(true);

    console.log($("#slide").val());

      //make negative power positive.
      if (power < 0){
        power = -power; 
      };

      //dictate how powerful a hit is. 
      if (power <10 ){
       power = 10;
     }

     else if (power < 50){
      power = 5;
    } 

    else {
      power = 2;
    }

    player2Health = player2Health - power;

    turn = !turn;

    console.log(player2Health);
    counter = counter + 1;
    console.log(counter);

    $("#player2Health").html(player2Health);

    // $("#counter").html(counter);
    turn = true;
    // console.log(turn);
    
    // runMyGame();

  // });
} else {
  console.log("NOT PLAYER 1 TURN!")
}

  }





 $("#player1Health").html(player1Health)
 $("#player2Health").html(player2Health)
 // $("#counter").html(counter)

  

 // runMyGame();


// $(document).on('keydown', function(e){
//   console.log(e.which);
// })
// A     L
// 65 / 76


// END OF THE PROGRAM
 }


