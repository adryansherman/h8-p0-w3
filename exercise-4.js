var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung' , 
    '21/05/1989' , 'Pria', 'SMA Internasional Metro');
    console.log(input);

  
    var birthday = input[3]
    var tanggal = birthday.split('/');
    var tanggal2 = birthday.split('/');
    var bulanDoang = tanggal[1];
   

    namaBulan = '';
    switch(bulanDoang){
        case '01': namaBulan = 'januari';
        break;
        case '02': namaBulan = 'Februari';
        break;
        case '03': namaBulan = 'Maret';
        break;
        case '04': namaBulan = 'April';
        break;
        case '05': namaBulan = 'Mei';
        break;
        case '06': namaBulan = 'Juni';
        break;
        case '07': namaBulan = 'Juli';
        break;
        case '08': namaBulan = 'Agustus';
        break;
        case '09': namaBulan = 'September';
        break;
        case '10': namaBulan = 'Oktober';
        break;
        case '11': namaBulan = 'November';
        break;
        case '12': namaBulan = 'Desember';
        break;
    }
console.log(namaBulan);

var urutTanggal = tanggal.sort(function(value1, value2) {return Number(value1) < Number(value2)});
console.log(urutTanggal);

console.log(tanggal2.join('-'));

var namaOrang = input[1];
console.log(namaOrang.slice(0,15));

}

dataHandling2(input);