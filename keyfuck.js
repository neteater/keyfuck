function run() {
	var str=document.getElementById('key').value;
	lets(str);
}
function getCats(smth) {
	//translates simple text to keyfuck text 	
}
function out(text) {
document.getElementById('out').innerHTML=text;
}
function lets(str) {
	var st="";
	var car=[];
	var max_val=29999;
	for (var i=0;i<=max_val;i++) car[i]=0;
	var dig=0;
	var keys=['+','-','>','<','.','@']; //array of using chars
	for (var x=0;x<str.length;x++) {
		switch (str.charAt(x)) {
			case keys[0]:
			car[dig]>255 ? car[dig]=0 : car[dig]++;
			break;
				case keys[1]:
				car[dig]===0 ? car[dig]=0 : car[dig]--;
				break;
					case keys[2]:
					dig>max_val ? dig=0 : dig++;
					break;
						case keys[3]:
						dig===0 ? dig=max_val : dig--;
						break;
							case keys[4]:
								st+=String.fromCharCode(car[dig]);
				   			  break;
								case keys[5]:
								car[dig]=0;
								break;
									default:
									out("I dont know what the hell you are writing here");
										break;
		}
	}

		out(st);//output		
}