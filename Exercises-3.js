var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){
    for (a = 0; a < input.length; a++){
        console.log(`Nomor ID: ${input[a][0]}\nNama Lengkap: ${input[a][1]}\nTTL: ${input[a][2]} ${input[a][3]}\nHobi: ${input[a][4]}\n`);
    }
}

dataHandling(input);