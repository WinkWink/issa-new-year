'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    var binary = n.toString(2);
    var binaryAr = binary.split("");
    
    var count = 0;
    var result = 0;

    binaryAr.forEach(function(element){
        if(element === '1'){
            count++;
            if(count>result){
                result = count;
            }
        }else{
            count = 0;
        }

    })
    console.log(result);



}
