let defaultCompare = (a, b) => a > b ? 1 : (a < b ? -1 : 0);

let mergeSort = (
    array,
    start = 0,
    end = array.length,
    compare = defaultCompare
) => {
    return array.slice(start, end);
};

export default mergeSort;