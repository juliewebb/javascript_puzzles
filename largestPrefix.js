// Given an array of strings, find the longest common prefix each string has.
// i.e. a list of yes, yodel, yeah should output y.
 
var biggestPre = function(input){   
  var str1 = '';
  var str2 = '';
  var keepLooking = true;
  var prefix = '';
  var i = 0;
  var shortestWord = input[0].length;

  for(i=0;i<input.length;i++){        
    if(input[i].length < shortestWord){
      shortestWord = input[i].length;
    }
  }

  for(w=0;w<shortestWord;w++){
    for(i=0;i<input.length-1;i++){
      if(keepLooking===true){
        if(input[i].length === shortestWord){
           prefix = input[i];
        }
        
        str1 = input[i].substr(0,w+1);
        str2 = input[i+1].substr(0,w+1);
        
        if(str1!==str2){
          keepLooking = false;
          prefix = str1.substr(0,str1.length-1);
        }
      }
    }
  }
  
  return prefix;

}