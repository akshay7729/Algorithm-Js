const arrayChunk = (arr, size) => {
  const chunkArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    chunkArr.push(chunk);
  }
  return chunkArr;
};
console.log(arrayChunk([1, 2, 3, 4, 5], 2));
