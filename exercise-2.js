// EXERCISE 2 
function balikString(string){
    var balik = '';
    var count = 0;
    for (var i = 0; i < string.length; i++ ){
        balik = string[i] + balik;
    }
    return balik;
}

console.log(balikString('hello world!'));