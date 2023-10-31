$(document).ready(function(){

 setInterval(function(){

   jackpot('.jackpot_amount');


 }, 50);


//-----------------------------------------------------------

function jackpot(classname){

     let str = $(classname).text();

     let amount_str = str.replace(/,/g, ''); //Remove commas from string
     let amount = parseInt(amount_str); // Convert to int

     amount+= 1;
     let i = 0;
     let arr = [...amount.toString()];

     let no_comma = Math.floor( (arr.length-1)/3 );  // Count the number of commas depend on the amount

     //Insert ',' to the array
     for(i=1;i<=no_comma;i++){
      let pos = i*3 + (i-1);
       arr.splice(-pos,0,',');
     }

     $(classname).text(arr.join(''));

   }

//----------------------------------------------------------


})
