var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}

$(document).ready(function(){
	var creampie = "https://drive.google.com/uc?export=view&id=";
	var defaultCoverURL = Base64.encode(thumbnail);

    $('a[href^="https://drive.google.com/open?"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://drive.google.com/open?id=", creampie); 
		var Perawanin = Base64.encode(Perawan);
		$(this).attr("id", "crot"); 
		$(this).attr("href", "#"); 	
		$(this).attr("style", "display:none;"); 
    $('#ListServer0').html( ' <button id="ServDef">Server Default</button> ' );    			
		    $("#ServDef").click(function(){	
		      $('#streamingframe').attr("src", "https://www.inafut.com/p/in-stream.html?vp1="+Perawanin+"&cv1="+defaultCoverURL);
		    });
	  });
      
	  $('a[href^="http://hentai.dx.am/id?=1"]').each(function(){
		var Janda2 = $(this).attr("href"); 
		var Perawan2 = Janda2.replace("http://hentai.dx.am/id?=1&v=", creampie); 
		var Perawanin2 = Base64.encode(Perawan2);
		$(this).attr("id", "crot"); 
		$(this).attr("href", "#"); 
		$(this).attr("style", "display:none;"); 
    $('#ListServer1').html( ' <button id="ServAlt">Server Alternatif</button> ' );    			
		    $("#ServAlt").click(function(){	
		      $('#streamingframe').attr("src", "https://www.inafut.com/p/in-stream.html?vp1="+Perawanin2+"&cv1="+defaultCoverURL);
		    });
	  });

	  $('a[href^="http://hentai.dx.am/id?=2"]').each(function(){
		var Janda3 = $(this).attr("href"); 
		var Perawan3 = Janda3.replace("http://hentai.dx.am/id?=2&v=", creampie); 
		var Perawanin3 = Base64.encode(Perawan3);
		$(this).attr("id", "crot"); 
		$(this).attr("href", "#"); 
		$(this).attr("style", "display:none;"); 
    $('#ListServer2').html( ' <button id="ServAmn">Server Aman</button> ' );    			
			$("#ServAmn").click(function(){	
		    $('#streamingframe').attr("src", "https://www.inafut.com/p/in-stream.html?vp1="+Perawanin3+"&cv1="+defaultCoverURL);
		  });
	  });
});     
