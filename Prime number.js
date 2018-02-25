function isPrime(num) {
  var divizori=0;
  var d=1;
    while(d<=num){  //cat timp numarul la care se imparte num e mai mic ca el, ia toate cazurile
        if(num%d===0){
          divizori++}
     d++}
         if(divizori===2){  //daca divizori=2, inseamna ca num se imparte la 1 si la el insusi, deci este prim
   return true;}
    else{
   return false;}
}