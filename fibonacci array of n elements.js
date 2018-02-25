function fibonacci(n) {
  var fib = [];
   fib[0] = 0;
   fib[1] =1;
     if(n<=0){
     fib = [];}
      for(var i = 2; i < n; i++){
       fib.push(fib[i-2] + fib[i-1]);
    }
   return fib;
}