$(init);

function init(){


//////////////////initial healther

  
  var player1Health = 100;
  var player2Health = 100;
  var time = (player2Health * 30);

   
   /*$( "#slider" ).slider({
      value:0,
      min: 0,
      max: 200,
      step: 5,
      slide: function( event, ui ) {
          $( "#power" ).val( ui.value );
          
      }
  });*/

  slideUp();


 function slideUp() {

    $( "#slide" ).animate({ value: 125 }, time , slideDown);

 }

 function slideDown() {

    $( "#slide" ).animate({ value: -125 }, time , slideUp);

 }


 $(window).keydown(function(e){

    $("#slide").stop(true);

    console.log($("#slide").val());

 });

 $("#player1Health").html(player1Health)

  


///////////// player2power and result of attack. 

$("#slider").click(function(){

       // var powerBar = $("#player2Power");
      var player2Power =  $( "#slider" ).slider( "value" );
       

      player1Health = player1Health- player2Power;

       console.log(player1Health);

      $("#player1Health").html(player1Health);
      
     
});


// $("#slide").css("value");


 





  
   



   

   // $( "#power" ).val($( "#slider" ).slider( "value" ) );
  
   
  

 



 // var slideVal = $('#slide').slider("option", "value");

 // console.log(slideVal)





 // 




// $(function(){

//   $( "#days" ).val($( "#slider" ).slider( "value" ) )



// });


// create a moving power bar that dictates the player2Power value.


// function timedBar() {

//   var powerBar = $("#player2Power");
//       powerBar.animate({left: '400px'}, time);

// }



// var time = (player2Health * 300); 

                            
                         


                          //    function showValue(newValue)
                          //    {
                          // document.getElementById("#range").innerHTML=newValue;
                          //    };

                          //    console.log(showValue)

                             // $("#slide").change(function() {
                             //    updateSlider(this.value);
                             //  })

                             // function updateSlider(slideAmount) 
                             //      {
                             //        var display = document.getElementById("chosen");
                             //        //show the amount
                             //        console.log(slideAmount);

                             












                                    }






// ////////////////////////set interval 
// function getPower() {
//   var power = 1;

//   setInterval(function() {
//     power + 10;
//   }, 1000)


// var myVar = setInterval
//   clearInterval();
// }




// setTimeout(function() {
//   console.log("hello");
// }, 1000);





// setInterval(function(){ alert("You missed!");
// player2power = 0;
//  }, time);









