var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,1);
    input.splice(4,0, "Pria");
    input.splice(5,0, "SMA Internasional Metro");
    console.log(input);

    var splitTanggal = input[3].split('/');
    switch (splitTanggal[1]){
        case '01':
            console.log('Januari');break;
        case '02':
            console.log('Februari');break;
        case '03':
            console.log('Maret');break; 
        case '04':
            console.log('April');break; 
        case '05':
            console.log('Mei');break; 
        case '06':
            console.log('Juni');break; 
        case '07':
            console.log('Juli');break; 
        case '08':
            console.log('Agustus');break;
        case '09':
            console.log('September');break;      
        case '10':
            console.log('Oktober');break;
        case '11':
            console.log('November');break;
        case '12':
            console.log('Desember');break;
        default:
            console.log('Format bulan salah');
    }

    var sortTanggal = input[3].split('/').sort(function(a, b) {
        return b - a;
      });
    console.log(sortTanggal);

    var joinTanggal = splitTanggal.join('-');
    console.log(joinTanggal);

    var sliceNama = input[1].slice(0,15);
    console.log(sliceNama);
}

dataHandling2(input);