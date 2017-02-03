// Given a string of letters, write a function that outputs string of 1's
// and 0's of the same size corresponding to if a selected letter is in 
// that position of the input string. Be sure to make x and input lowercase.
// For example isHere('l', 'hello') would output 00110. 
 
var isHere = function(x, input){ 

  x = x.toLowerCase();
  input = input.toLowerCase();
  
  var arr = input.split('');
  
  var newString = '';
  for(var i=0;i<arr.length;i++){
    
    if(arr[i]===x){
    	newString = newString + '1';
    } else {
		newString = newString + '0';
    }
  }

  return newString;
  
}