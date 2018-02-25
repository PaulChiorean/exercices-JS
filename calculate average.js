function find_average(array) {
  var total=0;
  for (var i=0; i<array.length; i++){
  total= total+array[i];
  }
  var medie=total / array.length;
  return medie;
}