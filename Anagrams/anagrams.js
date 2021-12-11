const anagrams = (a, b) => {
  const AClean = a.replace(/[^\w]/g, "");
  const BCleam = b.replace(/[^\w]/g, "");
  return (
    AClean.toLowerCase().split("").sort().join("") ===
    BCleam.toLowerCase().split("").sort().join("")
  );
};

// add regex
// convert to lowercase
// split
// sort
// join

console.log(anagrams("rail safety", "fairy tales"));
