//

function pasanganTerbesar(num) {
    var pasangan = '';
    var stringNum = String(num);
    for(var i = 0; i < stringNum.length; i++){
        if (Number(stringNum[i] + stringNum[i+1])> pasangan){
            pasangan = Number(stringNum[i] + stringNum[i+1]);
        }
  }
  return pasangan
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

  console.log('------------------');

  //dua angka terbesar
  function duaAngkaTerbesar(angka){
      var angka1 = '';
      var angka2 = '';
      var strAngka = String(angka);
      for(var i = 0; i < strAngka; i++){
          if(Number(strAngka[i]) > angka1){
              angka1 = Number(strAngka[i])
          } if(Number(strAngka[i]) < angka1 && Number(strAngka[i]) > angka2 ){
              angka2 = Number(strAngka[i])
          }
      }
      var gabung = '' + angka1 + angka2;
      return Number(gabung);
  }
  console.log(duaAngkaTerbesar(641573));
  console.log(duaAngkaTerbesar(12783456)); 
  console.log(duaAngkaTerbesar(910233));
  console.log(duaAngkaTerbesar(71856421)); 
  console.log(duaAngkaTerbesar(79918293)); 

  console.log('------------------');


