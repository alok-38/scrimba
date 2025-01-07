function bubble_sort(myArray, n) {
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // To track if a swap was made in the current pass
        for (let j = 0; j < n - i - 1; j++) { // Reduce range after each pass
            if (myArray[j] > myArray[j + 1]) {
                // Swap values using destructuring
                [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
                swapped = true;
            }
        }
        // If no elements were swapped, the array is sorted, so we can break early
        if (!swapped) {
            break;
        }
    }
}
