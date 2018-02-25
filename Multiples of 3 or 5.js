function solution(number){
   var sum=0;
   var mus=0;
   var hel=0;
      for(var i=0; i<number;i++){
         if(i % 3===0 && i%5!==0){
            sum+=i;}
         if(i % 5===0 && i % 3!==0){
            mus+=i;}
         if(i % 5===0 && i % 3===0){
            hel+=i;}
        }
   return sum+mus+hel;
}