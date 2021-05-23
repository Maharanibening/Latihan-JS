console.log("soal nomor 1")
let pertama = "saya sangat senang hari ini";
let kedua = "belajar javascript itu keren";
let ketiga = pertama.split(" ").slice(0, 1)
let keempat = pertama.split(" ").slice(2, 3)
let kelima = ketiga.concat(keempat)
let keenam = kedua.split(" ").slice(0,1)
let ketujuh = kedua.substring(8,18).toUpperCase()
console.log(kelima.concat(keenam).concat(ketujuh).join(" "))

console.log("soal nomor 2")

var kataPertama = parseInt("10"); 
var kataKedua = parseInt("2");
var kataKetiga = parseInt("4");
var kataKeempat = parseInt("6");
var hasil= (kataPertama+kataKedua)*(kataKeempat-kataKetiga)
console.log(hasil)

console.log("soal nomor 3")

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24) ;  
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

