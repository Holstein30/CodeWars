function iqTest(numbers) {
    var eCount = 0;
    var oCount = 0;
    var answer;
    var numArray = numbers.split(" ");
    numArray.map(x => {
        if (x % 2 === 0) {
            eCount++;
            //             console.log("even: " + numArray.indexOf(x));
        } else {
            oCount++;
            //             console.log("odd: " + numArray.indexOf(x));
        }
    });
    if (eCount > oCount) {
        numArray.map(x => {
            if (x % 2 !== 0) {
                answer = numArray.indexOf(x) + 1;
            }
        });
    }
    else {
        numArray.map(x => {
            if (x % 2 === 0) {
                answer = numArray.indexOf(x) + 1;
            }
        });
    }
    return answer;
}


iqTest("2 4 7 8 10");