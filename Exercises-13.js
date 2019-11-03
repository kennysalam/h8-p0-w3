function targetTerdekat(arr) {
    posisiO = 0;
    posisiX = [];
    kumpulanJarak = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posisiO = i;
        } else if (arr[i] === 'x') {
            posisiX.push(i);
        }
    }
    if (posisiX.length === 0) {
        return 0
    }
    for (var j = 0; j < posisiX.length; j++) {
        var jarak = Math.abs(posisiO - posisiX[j]);
        kumpulanJarak.push(jarak);
    }
    for (var k = 0; k < kumpulanJarak.length; k++) {
        var terdekat = kumpulanJarak[0];
        if (kumpulanJarak[k] < terdekat) {
            terdekat = kumpulanJarak[k];
        }
    }
    return terdekat;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2