function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1=s1.toLowerCase();
	s2=s2.toLowerCase();
	let array = s1.split("");
	let count = 0;
	let index = 0;
	for (let i=0;i<=array.length-s2.length;i++){
		let str = s1.slice(i,i+s2.length);
		if(str===s2){
			index = i;
			count++;
		}
	}
	if(count>0){
		return index;
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
