/*
//////////////////////////////////////////////////////////////////

							Name
					  Javascript/jQuery

//////////////////////////////////////////////////////////////////
*/
$(document).ready(function(){
	//sanity check
	console.log("So far so good...");
	curserFade();

});

var reqReq = "- Request: q=9d8g986303jm74058k8.352-b.5";
var initi = "- Initializing...";
var accMem = "- Accessing Memory...";
var dotsOne = "...";
var dotsTwo = "...";
var dotsThree = "...";
var dataFind = "- Data Found::";
var lineBreak = "---------------";

var blurb = "From a galaxy torn by civil war to a sleepy planet on the edge of the known universe, Enforcer Jakai del Quint pursues the failed Warlord Dorno Ban Sant to final showdown leaving Jakai alone and stranded on a planet called Earth far from the civilization he fought to protect. More than a hundred years later Jakai awakes, freed from his hibernation by a curious hiker. Together, hunted by Earth's most powerful governments, fleeing from covert alien 'observers', they join together to pursue Jakai's need to bring long delayed justice to the vicious warlord now using his advanced technology to dominate Earth. With only the belief in his mission and the support of a woman with nothing to lose,  Jakai faces not only his past, but his future, and the future of Earth itself as he challenges the hidden forces of the Galactic core and those who would make Earth nothing more than stepping stone to a renewed cycle of galactic war.";

var blurb2 = "Words words words words words wordy words words";

var blurb3 = "Actually Echo Park wolf locavore, letterpress lumbersexual cardigan beard. Leggings wolf art party, deep v small batch +1 salvia direct trade four loko Truffaut. Messenger bag drinking vinegar Thundercats street art keytar. PBR&B 3 wolf moon Austin next level, leggings Thundercats keytar. Fixie direct trade hella, fanny pack Banksy gastropub disrupt. Leggings asymmetrical lo-fi jean shorts, irony single-origin coffee sriracha try-hard...";

//////////////////////////////////

		// call functions
		// for mock console

//////////////////////////////////


function callType (){
	typeIt("#type-out", blurb, 0);
	console.log("it's done");
}

function typeReq (){
	beforeType("#req-line", reqReq, 0);
}

function typeInit (){
	beforeType("#init-line", initi, 0);
}

function typeMem (){
	beforeType("#mem-line", accMem, 0);
}

function typeDot1 (){
	dotType("#dot1", dotsOne, 0);
}

function typeDot2 (){
	dotType("#dot2", dotsTwo, 0);
}

function typeDot3 (){
	dotType("#dot3", dotsThree, 0);
}

function typeFound (){
	beforeType("#found-line", dataFind, 0);
}

function typeBreak (){
	beforeType("#break-line", lineBreak, 0);
}


var functionCall = [typeReq, typeInit, typeMem, typeDot1, typeDot2, typeDot3, typeFound, typeBreak, callType];

function typeToConsole(array, i) {
	var toCall = array[i++];
	toCall();
	setTimeout(function(){
			typeToConsole(array, i);
		},
		2000
	);
}

///////////////////////////////////////////

			// typing functions
			// for mock console

///////////////////////////////////////////


var typeIt = function (target, message, index) {
	var interval;
	console.log(interval);

	if (index === message.length){
		//
		console.log("Blam!!");
		console.log("     - Nathan-O");
		return -1;
		//
	} else if (index >= message.length*0.87){
		//
		interval = Math.floor(Math.random()*6) + 1;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				typeIt(target, message, index);
			},
			interval*100
		);
		//
	} else if ((index >= message.length*0.75) && (index < message.length*0.87)) {
		//
		interval = Math.floor(Math.random()*4) + 0;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				typeIt(target, message, index);
			},
			interval*100
		);
		//
	} else if ((index >= message.length*0.62) && (index < message.length*0.75)) {
		//
		interval = 0.5;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				typeIt(target, message, index);
			},
			interval*100
		);
		//
	} else if ((index >= message.length*0.5) && (index < message.length*0.62)) {
		//
		interval = Math.floor(Math.random()*5) + 1;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				typeIt(target, message, index);
			},
			interval*100
		);
		//
	} else if ((index >= message.length*0.25) && (index < message.length*0.5)) {
		//
		interval = 0.3;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				typeIt(target, message, index);
			},
			interval*100
		);
		//
	} else if ((index >= message.length*0.12) && (index < message.length*0.25)) {
		//
		interval = Math.floor(Math.random()*3) + 0;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				typeIt(target, message, index);
			},
			interval*100
		);
		//
	} else if (index < message.length*0.12) {
		//
		interval = 0.5;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				typeIt(target, message, index);
			},
			interval*100
		);
		//
	}
};

var beforeType = function (target, message, index){
	if (index <= message.length) {
		console.log("started");
		interval = 0.4;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				beforeType(target, message, index);
			},
			interval*100
		);
	}
};

var dotType = function (target, message, index){
	if (index <= message.length) {
		console.log("started");
		interval = 8;

		$(target).append(message[index++]);
		setTimeout(function (){
			console.log("In setTimeout interval = " + interval*100);
				dotType(target, message, index);
			},
			interval*100
		);
	}
};

function curserFade() {
	for (var i = 0; i < 500; i++) {
		$("#curser").fadeIn(450).fadeOut(450).fadeIn(450).fadeOut(450).fadeIn(450);
	}
}

//
//
//  - Change interval to be a random number betwween 1 & 10
// 	then multiply by 100
//
//  - Refactor aspects of the function to mimic old 80's
// 	computer console readout, as close as possible.
//			 - Possibly by having an if statment that specifies
//				different sections of the String (blurb) to make
//				it look like certain words are typed faster and
// 			slower. (i.e. - i < blurb.length/2 for the first
// 			half, blurb.length*.25 for the first 1/4 th, etc.)
//					** Note: Set up order of IF statment
//								will be crucial for this to
//								work.
//
//   - Have very small div on an infinite (ish at least) blinking
//		 loop from show to hide to mimic console curser.
//
//	  - General color or div is black background with green or
//		 light blue colored font. and custom computer looking font.
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//
//
//  <div id="msg"/>
//
//	 var showText = function (target, message, index, interval) {
//	   if (index < message.length) {
//	     $(target).append(message[index++]);
//	    setTimeout(function () { showText(target, message, index, interval); }, //interval);
//   }
// };
//
// // Call with:
//
// $(function () {
//
//   showText("#msg", "Hello, World!", 0, 500);
//
// });




/*
String segments
|--------|--------|---------------------|----------|-----------|---------|--------|
			^1/8		^1/4						 ^half		^5/8			^3/4		 ^7/8
1/8 = str.length*0.12
1/4 = str.length*0.25
half = str.length*0.5
5/8 =  str.length*0.62
3/4 = str.length*0.75
7/8 = str.length*0.87
*/




/*
///////////////////////////////////////////////////////////////////////////

/////////// Notes



//////////////////////////////////////////////////////////////////////////

////////// Snippets



//////////////////////////////////////////////////////////////////////////
*/
