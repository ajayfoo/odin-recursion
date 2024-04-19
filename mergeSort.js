const merge = (arr, start, mid, end) => {
  const nL = mid - start + 1;
  const nR = end - mid;
  const M = new Array(nL + nR);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      M[k] = arr[i];
      i += 1;
    } else {
      M[k] = arr[j];
      j += 1;
    }
    k += 1;
  }
  while (i <= mid) {
    M[k] = arr[i];
    i += 1;
    k += 1;
  }
  while (j <= end) {
    M[k] = arr[j];
    j += 1;
    k += 1;
  }
  for (i = start, k = 0; i <= end; i += 1, k += 1) {
    arr[i] = M[k];
  }
};

const mergeSort = (arr, start, end) => {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};

const testMergeSort = (arr) => {
  console.log("Before Sorting: " + arr);
  mergeSort(arr, 0, arr.length - 1);
  console.log("After Sorting: " + arr);
};

testMergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
testMergeSort([105, 79, 100, 110]);
testMergeSort([]);
