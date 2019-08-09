function targetTerdekat(arr) {  
  var jarakXO = 0;
  var tampungJarakXO = [];
  var indexX = arr.indexOf('x');//pencari ada ga x di array
  var indexO = arr.indexOf('o');//pencari lokasi o  
  
  if (indexX === -1 || indexO === -1) {   //kalo ga ada x atau o dia balik nilai jadi 0 
          return 0;
  }

  for (var i = 0; i < arr.length; i ++){
    if (arr[i] === 'x'){
      jarakXO = Math.abs(i - indexO);
      tampungJarakXO.push(jarakXO); //udah terurut dari yang paling pendek
      
    }
  }
  
  return tampungJarakXO[1] //ambil yang pertama karena paling dekat

}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', ' ',' ', 'x', 'x', ' ', ' ', 'x'])); // 2
