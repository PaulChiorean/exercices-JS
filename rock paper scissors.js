const rps = (p1, p2) => {
var a='Player 1 won!';
var b='Player 2 won!';
  if(p1=='scissors' && p2=='paper'){
return a;}
  if(p1=='paper' && p2=='rock'){
return a;}
  if(p1=='rock' && p2=='scissors'){
return a;}
  if(p1=='scissors' && p2=='rock'){
return b;}
  if(p1=='rock' && p2=='paper'){
return b;}
  if(p1=='paper' && p2=='scissors'){
return b;}
  if(p1==p2){
return 'Draw!';}  
};