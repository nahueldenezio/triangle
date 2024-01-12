function triangle(row) {
    while (row.length > 1) {
        let newRow = '';
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) {
                newRow += row[i];
            } else {
                newRow += ['R', 'G', 'B'].find(color => !row.includes(color));
            }
        }
        row = newRow;
    }
    return row;
}

// Test cases
console.log(triangle('B')); 
console.log(triangle('GB'));  
console.log(triangle('RRR')); 
console.log(triangle('RGBG')); 
console.log(triangle('RBRGBRB'));
console.log(triangle('RBRGBRBGGRRRBGBBBGG')); 
