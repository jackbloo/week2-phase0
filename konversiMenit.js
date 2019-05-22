function konversiMenit(menit) {
    var hour = Math.floor(menit / 60);
    var mins  = (menit % 60)
  
    var waktu = '';
    if(mins < 10 ){
      waktu +=  '' + hour + ':' + '0'+mins;
    } else {
    waktu +=  '' + hour + ':' + mins;
    }
    return waktu
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00