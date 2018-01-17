function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    if (Math.sqrt(sq) % 1 === 0) {
        sq++;
        while (Math.sqrt(sq) % 1 != 0) {
            sq++;
        }
        return sq;
    } else {
        return -1;
    }
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));