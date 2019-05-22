// 1. Menyusun Barisan Bintang
var rows1 = 5;
var asterisk1 = 0;
while(asterisk1 < rows1){
  console.log('*');
  asterisk1 ++;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5; // input the number of rows
for(var i = 1; i <= rows2; i++){
  var asterisk2 = '';
    for(var j = 1; j <= rows2; j++){
        asterisk2 += '*'
    }
    console.log(asterisk2);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;// input the number of rows
for(i = rows3 ; i >= 1; i--){
  var asterisk3 = '';
    for(j = i; j <= rows3; j++){
        asterisk3 += '*';
    }
     console.log(asterisk3);
}
