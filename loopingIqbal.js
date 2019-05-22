// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var flag = 2;
var flag1 = 20;
while(flag <= 20){
    console.log(flag + ' ' + '-' + ' ' + 'I love coding');
 flag += 2;
}
console.log('LOOPING KEDUA');
while(flag1 >= 2){
    console.log(flag1 + ' ' + '-' + ' ' + 'I will become fullstack developer');
 flag1 -= 2;
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(var angka = 1; angka <= 20; angka ++){
    console.log(angka + ' ' + '-' + ' ' + 'I love coding')
}
console.log('LOOPING KEDUA');
for(var angka1 = 20; angka1 > 0; angka1 --){
    console.log(angka1 + ' ' + '-' + ' ' + 'I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap

// Ganjilgenap
console.log('SOAL GANJIL GENAP')
for(var counter = 0; counter <= 100; counter += 1){
    if (counter % 2 === 0){
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}
// SOAL COUNTER +2
console.log('SOAL COUNTER +2')
for(var counter1 = 1; counter1 <= 100; counter1 += 2){
    if (counter1 % 3 === 0){
        console.log(counter1 + ' ' + 'KELIPATAN 3');
    } else {
        console.log('""');
    }
}

// SOAL COUNTER +5
console.log('SOAL COUNTER +5')
for(var counter2 = 1; counter2 <= 100; counter2 += 5){
    if (counter2 % 6 === 0){
        console.log(counter2 + ' ' + 'KELIPATAN 6');
    } else {
        console.log('""');
    }
}

// SOAL COUNTER +9
console.log('SOAL COUNTER +9')
for(var counter3 = 1; counter3 <= 100; counter3 += 9){
    if (counter3 % 10 === 0){
        console.log(counter3 + ' ' + 'KELIPATAN 10');
    } else {
        console.log('""');
    }
}