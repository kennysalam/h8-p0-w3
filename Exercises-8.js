function pasanganTerbesar(num) {
    var stringNum = String(num);
    var tempKecil = 0;
    var tempBesar = 0;

    for (var i = 0; i < stringNum.length - 1; i++) {
        tempKecil = stringNum[i] + stringNum[i + 1]
        if (tempKecil > tempBesar) {
            tempBesar = tempKecil
        }
    }
    return tempBesar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99