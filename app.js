var c_length = 47;
var letters = document.getElementById("raw").innerHTML;
var started = false;
var index = 0;
var cur_string = letters.substr(index,c_length);
// console.log(letters.length);
var charcount = 0;
var wcharcount = 0;
var starttime;
var timer = 0;
var flag = false;
//console.log(starttime);
var disp = document.getElementsByClassName("output_area")[0];
var userdisp = document.getElementById('user_area');
var timertag = document.getElementById('timer');
var acctag = document.getElementById('acc');
var speedtag = document.getElementById('speed');
var trytag = document.getElementById('repeat');

disp.innerHTML = cur_string;

document.addEventListener('keypress', function(e) { 
	if(!started){
		start();		
	}
if(!flag){
	curtime = new Date();
	timer = (curtime - starttime)/1000;
	timertag.innerHTML = Math.ceil(timer);
	charcount++;

	e = e || window.event;  //for IE
	var chartemp = e.which; //console.log("cahrrrr",chartemp);
	var charac = String.fromCharCode(chartemp);
	if(charac == letters.charAt(index))
	{
		
		document.getElementsByClassName("user_area")[0].style.background = 'green';
		//updating cur_str
		index++;
		cur_string = letters.substr(index , c_length); //console.log(cur_string);
		// if(cur_string.charAt(0) == ' '){
		// 	cur_string(index+1 , c_length-1);
		// 	disp.innerHTML = '&#160;' + cur_string;
		// }
		// else 
		disp.innerHTML = cur_string;
		userdisp.innerHTML += charac;


		

	}
	else{
		document.getElementsByClassName("user_area")[0].style.background = 'red';

		wcharcount++;
	}

	acctag.innerHTML = Math.floor(100*(1-(wcharcount/charcount)));
	speedtag.innerHTML = Math.floor(charcount/timer);

	if(index == letters.length){
		alert("Congrats!"+'\n'+"Speed:"+speedtag.innerHTML+" chars/sec"+'\n'+"Accuracy:"+acctag.innerHTML+"%");
		flag = true;
	}

}
})

trytag.addEventListener("click", function(){
    window.location.reload();

});

function start(){
	starttime = new Date();
	started = true;
}