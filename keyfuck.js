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
	var keys=['+','-','>','<','.','@','{','}']; //array of using chars
	var x=0;
	 while (x<str.length) {
		switch (str.charAt(x)) {
			case keys[0]:
			car[dig]>255 ? car[dig]=0 : car[dig]++;
			x++;
			break;
				case keys[1]:
				car[dig]===0 ? car[dig]=0 : car[dig]--;
				x++;
				break;
					case keys[2]:
					dig>max_val ? dig=0 : dig++;
					x++;
					break;
						case keys[3]:
						dig===0 ? dig=max_val : dig--;
						x++;
						break;
							case keys[4]:
								st+=String.fromCharCode(car[dig]);
								x++;
				   			  break;
								case keys[5]:
								car[dig]=0;
								x++;
								break;
									case keys[6]:
									var t=x;
									t++;
									  switch (str.charAt(t)) {
									  	case keys[0]:
									  	dig===0 ? car[dig]=car[max_val]+car[1] : car[dig]=car[dig]+car[dig-1]+car[dig+1];
									  	if (dig===max_val) car[dig]=car[dig]+car[max_val-1]+car[0];
									  	break;
									  		case keys[1]:
									  		dig===0 ? car[dig]=car[max_val]-car[1] : car[dig]=car[dig]+car[dig-1]-car[dig+1];
									  		if (dig===max_val) car[dig]=car[dig]+car[max_val-1]-car[0];
									  		break;
									  }
									  x+=2;
									break;
									case keys[7] :
									x++;
									break;
										default:
										out("I dont know what the hell you are writing here");
										x++;
										break;
		}
	}

		out(st);//output		
}