// Return an array
function fizzbuzz(n)
{
var newArray=[];
for (var i=1;i<=n;i++) {
    if (i%15==0) {
      newArray.push('FizzBuzz');
    } else if (i%3==0){
      newArray.push('Fizz');
    } else if (i%5==0){
      newArray.push('Buzz');
    } else {
      newArray.push(i);
    }
}
  return newArray;
}

// Return an string
function fizzbuzz(n){
    for (var i = 0; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");}
        else if(i % 3 === 0){
            console.log("Fizz");}
        else if(i % 5 ===0){
            console.log("Buzz");}
        else{
            console.log(i);}
    }
}
