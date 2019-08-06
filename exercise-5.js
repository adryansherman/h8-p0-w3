function palindrome(kata){
    var balik ='';
    for (var i = 0; i < kata.length; i ++){
        balik = kata[i] + balik;
    } if(kata === balik){
        return true;
    } else{
        return false;
    }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false




