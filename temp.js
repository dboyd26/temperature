//Best solution so far....






// function to calculate the scale degree
function displayTemp() //declare function
{
    let conversion; // make sure that you declare variable first, save yourself some heartache.
    let scale = document.querySelector('input[type = "radio"]:checked').value; //this should highlight the checked option
    let temp = document.getElementById("temp").value; //should pull the user input information
    // if everything works correctly, this will take the radio box info and match it with the input info to convert the 
    //
    if (scale == "celsius") {
        conversion = (temp - 32) * 5 / 9;
        
    }

    else if (scale == "fahrenheit") {
        conversion = (temp * 9 / 5) + 32;
        
    }

    
    document.querySelector("#itsHot").innerHTML = conversion;


    

}

 /*function convertFinished(scale, temp)
 {  
     
    let scaleChange;

    if (scale == "celsius")
    {
       let scaleChange = "You have just converted +temp+ farenheit to +converstion+ celsius."; 
    }
    else if (scale = "radius")
    {
        let scaleChange = "You have just converted +temp+ celsius to +conversion+ farenheit.";

    }
    document.querySelector("#itsHot").innerHTML = scaleChange;
}*/



 // let rising = displayTemp();
 //console.log(rising);


/* function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}*/
// I need a function to produce output

//I know it seems difficult now, but don't give up. Your brain hurts and you are trying  endless solutions, but it's fun! Right? 
// You're using your worn out brain, takes time to get back to it.

//Ben used getElementbyID().checked -- really like querySelector though, seems a bit easier


















