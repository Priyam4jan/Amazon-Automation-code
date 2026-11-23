const sentence = "Good morning good Evening good MorninG";
const words = sentence.toLowerCase().split(" ");
//const words = sentence.toLowerCase().replace(/[^a-zA-Z0-9\s]/g,"").split(" ");
///[^a-zA-Z0-9\s]/g --> Match anything that is not letter , number or space
const counts = {};

// Count how many times each word appears
for (const word of words) {
  counts[word] = (counts[word] || 0) + 1;
  console.log(counts);
}

// Print only repeated words and their counts
for (const word in counts) {
  if (counts[word] > 1) {
    //console.log(`${word}: ${counts[word]} occurrences`);
    console.log(word + " : " + counts[word] +" occurences");
  }                                                                               
}