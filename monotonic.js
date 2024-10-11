const monotonic = function (array) {
  const first = array[0];
  const last = array[array.length - 1];
  let i = 0; // Initialize i to index 0

  if (first === last) {
    for (i; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) {
        console.log("Not Monotonic");
        return; // Exit function if a violation is found
      }
    }
    console.log("Monotonic"); // If no violations, array is constant
  } else if (first < last) {
    for (i; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        console.log("Not Monotonic");
        return; // Exit function if a violation is found
      }
    }
    console.log("Monotonic"); // If no violations, array is increasing
  } else {
    for (i; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        console.log("Not Monotonic");
        return; // Exit function if a violation is found
      }
    }
    console.log("Monotonic"); // If no violations, array is decreasing
  }
};

monotonic([1, 2, 3, 4]); // Monotonic
monotonic([4, 3, 2, 1]); // Monotonic
monotonic([1, 1, 1, 1]); // Monotonic
monotonic([1, 3, 2]); // Not Monotonic
