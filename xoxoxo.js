function xo(str) {
    if (str.match(/x/gi).length >= str.match(/o/gi).length){ 
        return true;
    } else if (str.match(/x/gi).length < str.match(/o/gi).length){
      return false;
    }
    }
        
    // TEST CASES
    console.log(xo('xoxoxo')); // true
    console.log(xo('oxooxo')); // false
    console.log(xo('oxo')); // false
    console.log(xo('xxxooo')); // true
    console.log(xo('xoxooxxo')); // true