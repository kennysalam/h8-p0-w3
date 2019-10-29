function balikString(str){
    var output = '';
    for (a = str.length - 1; a >= 0; a--){
        output += str[a];
    }
    return output;
}

console.log(balikString('hello world!'));