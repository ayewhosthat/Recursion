function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        const mid = Math.floor(arr.length/2);
        const left = arr.slice(0,mid);
        const right = arr.slice(mid);   
        const arr1 = mergeSort(left);
        const arr2 = mergeSort(right);
        return merge(arr1, arr2);
    }
}

function merge(arr1, arr2) {
    const out = [];
    // loop as long as both lists are not empty, then merge the rest of the items
    while ((arr1.length >= 1) && (arr2.length >= 1)) {
        if (arr1[0] < arr2[0]) {
            // add smallest item
            out.push(arr1[0]);
            arr1.splice(0,1)
        } else {
            out.push(arr2[0]);
            arr2.splice(0,1);
        }
    }
    // at this point, at least one of the lists is empty
    while (arr1.length >= 1) {
        out.push(arr1[0]);
        arr1.splice(0,1)
    }
    while (arr2.length >= 1) {
        out.push(arr2[0]);
        arr2.splice(0,1);
    }
    return out;
}