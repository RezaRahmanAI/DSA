const checkMonotonic = function (array) {
  const firstIndex = array[0];
  const lastIndex = array[array.length - 1];
  let i = 0;

  if (firstIndex === lastIndex) {
    for (i; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) {
        console.log("Not Monotonic");
        return;
      }
    }

    console.log("Monotonic");
  } else if (firstIndex < lastIndex) {
    for (i; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        console.log("Not Monotonic");
        return;
      }
    }
    console.log("Monotonic");
  } else {
    for (i; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        console.log("Not Monotonic");
        return;
      }
    }
    console.log("Monotonic");
  }
};

checkMonotonic([1, 2, 3, 4]); // Monotonic
checkMonotonic([4, 3, 2, 1]); // Monotonic
checkMonotonic([1, 1, 1, 1]); // Monotonic
checkMonotonic([1, 3, 2]); // Not Monotonic
