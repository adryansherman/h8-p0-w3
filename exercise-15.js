
function groupAnimals(animals) {
  animals.sort();
  var grup = [[]];
  var grupIndex = 0;
  grup[grupIndex].push(animals[0]) //coba ngepush ngisi kotak array kelompok pertama dengan animal yang ada dibaris paling depan setelah diurutkan
  var i = 1; //karena udah ngepush, loop dimulai dari index-1
  while (i < animals.length) {
     if (grup[grupIndex][0][0] === animals[i][0]) { //cek kecocokan huruf pertama, kalo sama
      grup[grupIndex].push(animals[i]); //di push masuk ke kotak array yang sama, selama huruf awal masih sama
    } else {
      grup.push([animals[i]]); //kalo udah ga sama, masuk kotak array besar dulu
      grupIndex++; //baru dibuatin kotak array kelompok baru dan dimasukin kesana
    }
    i++
  }
  return grup;
}



  
  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

  console.log(groupAnimals(['cacing', 'ayam','anjing','antu' ,'kuda', 'anoa','kucing','kurap', 'kancil']));

 