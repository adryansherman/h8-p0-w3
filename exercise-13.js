function targetTerdekat(arr){
  var jarakXO = 0; //buat variable jarak initial jarak o
  var urutJarakXO = []; //buat nampung jarak jarak dari banyak x ke target o
  var indexX = arr.indexOf('x'); //cek ada ga x di array
  var indexO = arr.indexOf('o'); //cek ada ga o di array
  if(indexX === -1 || indexO === -1){ //kalo x atau o ga ketemu, return 0
    return 0
  }
  for (var i = 0; i < arr.length; i++){ //cek isi array sepanjang array
      if(arr[i] === 'x'){ // kalo isinya sama dengan x, berarti titik titik lokasi x udah ketemu, ada di indexks mana aja
        jarakXO = Math.abs(i - indexO) //jarak antar index: i sekarang udah jadi indikator lokasi tiap x dikurang dengan locator o 
        urutJarakXO.push(jarakXO); //ada beberapa jarak, sort dulu dapetin yang pendek
        urutJarakXO.sort()
      }
  }
  return urutJarakXO[0]//ambil indek-0 karena yang paling pendek
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', ' ',' ', 'x', 'x', ' ', ' ', 'x'])); // 0
console.log(targetTerdekat([' ', ' ',' x', 'x', 'x', ' ', ' ', 'o']));

