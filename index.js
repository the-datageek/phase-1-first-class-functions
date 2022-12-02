function receivesAFunction(callback) { 
    return callback(); 
  } 
  receivesAFunction(() => { 

  }); 
  // named function 
  function returnsANamedFunction() { 
    let sam = () => console.log("mans") 
  return (sam) 
  } 

// anonymous function 
var returnsAnAnonymousFunction = function() { 
    return (() => { 
alert('This an anonymous function') 
    }  
    ) 
}