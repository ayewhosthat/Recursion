function fibs(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0,1];
    } else {
        const output = [0,1];
        while (n >= 3) {
            output.push(output.at(-1) + output.at(-2));
            n--;
        }
        return output;
    }
}

function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0,1];
    }
     else {
        const res = fibsRec(n-1);
        return [...res, res[res.length-1] + res[res.length-2]];
    }
}