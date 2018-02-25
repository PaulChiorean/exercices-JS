function divisors(integer) {
	var num=[];
	var batman = integer;
	for(var i=1; i<integer; i++){
		if(integer%i===0 && i!=1 && i!==integer){
			num.push([i]);
		}
	}

	if (num.length == 0) {
		return integer + ' is prime';
	}

	return num;
};



function divisors(integer) {
	var num=[];
	for(var i=1; i<integer; i++){
		if(integer%i===0 && i!=1 && i!==integer){
			num.push([i]);
		}
	}
	if (num.length == 0) {
		return integer + ' is prime';
	}
	return num;
};