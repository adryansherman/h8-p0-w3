function angkaPalindrome(num){
palindrome = false;
while(palindrome == false){
    num++;
    var stringNum = String(num);
    var balikNum = '';
    for(var i = 0; i < stringNum.length; i++){
        balikNum = stringNum[i] + balikNum;
    } if (balikNum === stringNum){
        palindrome = true;
        return num
    }
}
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001z
