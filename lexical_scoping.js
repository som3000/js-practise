 let y = 1
 let x = 2
 for (let term = 1 ; term <=4 ; term++ ) {
     console.log("Child x = " , x);
     x++
     console.log("  Child x now = " , x)
     y = y + x 
     console.log( "     y = " , y);
    
 } console.log("y changes to" , y , "as it wasn't initiallised in the child scope.");
