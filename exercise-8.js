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