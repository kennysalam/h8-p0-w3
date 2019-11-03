function groupAnimals(animals) {
    var output = [];
    for (var i = 0; i < animals.length; i++) {
        var sama = false;
        for (var j = 0; j < output.length; j++) {
            if (animals[i][0] == output[j][0][0]) {
                output[j].push(animals[i]);
                sama = true;
            }
        }
        if (sama == false) {
            output.push([animals[i]])
        }
    }
    return output.sort();
}

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]