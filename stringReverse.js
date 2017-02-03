// reverse a string without using the string reverse function
function reverse(str){ 

  /*var strSplit = str.split('');
  var flipped = '';
  for(var i=0;i<str.length;i++){
    var index = (str.length-1)-i;
    flipped = flipped + strSplit[index];
  }
  */
  
  var flipped = str.split('').reduce(
    function(prv, cur, i, arr){
      return prv + arr[arr.length - i - 1]
    }
    ,'')

  return flipped;
  
}